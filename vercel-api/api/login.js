import crypto from 'crypto';

const SNOWFLAKE_ACCOUNT = process.env.SNOWFLAKE_ACCOUNT;
const SNOWFLAKE_USER = process.env.SNOWFLAKE_USER;
const SNOWFLAKE_WAREHOUSE = process.env.SNOWFLAKE_WAREHOUSE;
const SNOWFLAKE_DATABASE = process.env.SNOWFLAKE_DATABASE;
const SNOWFLAKE_SCHEMA = process.env.SNOWFLAKE_SCHEMA;
const RSA_PRIVATE_KEY = process.env.RSA_PRIVATE_KEY;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { passcode } = req.body;
    const token = generateJWT();
    const sql = `SELECT partner_name FROM PARTNER_HUB.TRACKING.PARTNERS WHERE passcode = '${passcode.replace(/'/g, "''")}' AND enabled = TRUE LIMIT 1`;
    const result = await snowflakeQuery(token, sql);

    if (result.data && result.data.length > 0) {
      return res.status(200).json({ ok: true, partner: result.data[0][0] });
    }
    return res.status(401).json({ ok: false });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

function generateJWT() {
  const account = SNOWFLAKE_ACCOUNT.toUpperCase();
  const user = SNOWFLAKE_USER.toUpperCase();
  const qualifiedUser = `${account}.${user}`;

  const privateKey = RSA_PRIVATE_KEY.replace(/\\n/g, '\n');
  const pubKeyDer = crypto.createPublicKey(privateKey).export({ type: 'spki', format: 'der' });
  const fp = crypto.createHash('sha256').update(pubKeyDer).digest('base64');

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: `${qualifiedUser}.SHA256:${fp}`,
    sub: qualifiedUser,
    iat: now,
    exp: now + 3600,
  };

  const enc = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const signingInput = enc(header) + "." + enc(payload);
  const sig = crypto.sign('RSA-SHA256', Buffer.from(signingInput), privateKey);

  return signingInput + "." + sig.toString('base64url');
}

async function snowflakeQuery(token, sql) {
  const account = SNOWFLAKE_ACCOUNT.toLowerCase().replaceAll("_", "-");
  const url = `https://${account}.snowflakecomputing.com/api/v2/statements`;
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "User-Agent": "PartnerHubVercel/1.0",
      "Authorization": `Bearer ${token}`,
      "X-Snowflake-Authorization-Token-Type": "KEYPAIR_JWT",
    },
    body: JSON.stringify({
      statement: sql,
      warehouse: SNOWFLAKE_WAREHOUSE,
      database: SNOWFLAKE_DATABASE,
      schema: SNOWFLAKE_SCHEMA,
      timeout: 30,
    }),
  });
  return resp.json();
}
