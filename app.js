const SF_ACCOUNT = "sfseapac-lingxiao-aws1";
const SF_USER = "PARTNER_HUB_WRITER";
const SF_WAREHOUSE = "PARTNER_HUB_WH";
const SF_DATABASE = "PARTNER_HUB";
const SF_SCHEMA = "TRACKING";
const SF_KEY = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCut+LiGJykG1KkgO/arvgOGcdvZ0D1gEjLoUaCAs" +
"dT9vGVzHlj3Dx4Rz8qKO4yDjDnomnIVpXzlVxkgSGWBg6gZLvG2jvY1+nyude4YW+2AXbWKCR325u2qtw5OibPm56FGkPZCOwsid+OaNFWoGwlFYey" +
"++NTZP4RiFnOkDLxy3tOlTvEIR+BZ1y/tdYYGcfY30tHM1Kr4WPdvq4WBCd974DN8M+egorDn8w93VNQPSKQRZQzajy7wIfnoEpLsuZElGEMs2eUa9wz" +
"veoax8jzWWwjCB6yNUyk+4xY5mZp/hLiDwcWBh4dKq7se0eqm2LyK+Feo1bzdpQlgr/6svAHAgMBAAECggEAeIsmXhfc+txfCGBtG9PcEN54WsRCbR81" +
"GkkK/GguXh/iThflKKCql9GQIuZacO6ZjzbfBPm4O3axaCYvpfJH5SGa7HdlExbksjLGQs/24vvfoaHQh2Fc7Yq0pkcYv+P+WpbkeLlPOOtm8jofNEU6" +
"V9ui5DolfUQQhsgsLfgPLgKxxvC2LxE5EJbqSeYK7Gv2HHGtPR1YFUAqrDCYdS7mZBxIwQA17mfR5ie9oUW2cqdMKRHurSlu2VFKx/yKTgxwo953nLKrp" +
"X5TZTKNZYtbCb6DUvGpm1tUp4wiKtNAzLvDfr6pL8Xbv9UsJ5u9Qbr2MpxVst6FEZ6MqEi2MTvBAQKBgQDdzgH9AYA5Rfp2h4XosTBDyO4fYqORYHE/2Z" +
"avlzfRHimE7J6P+RQFjQ4JQ7TAnsXwHdjHRDwl4TFpqYeZHebb1x8VfCb9zHXuFAojF2m3SvcrGyMuSCid1wGZfYnC72vkokneLkwiskjYVUrQ5erQFU19" +
"k97ylqrwd+tnC2yomwKBgQDJp4N/zaNjxqiI6OvecO2rJgBV13UAmb/bqFPP5pHXznS+qJAUoAJbdr3EA2ElfPAMIF0VxY30DXfnkNoVTwEh41FEWFN6IZ" +
"Xyoh1MCksK1bbJ5nB2l1C2wo7RwMoAmkvK/xQbaqF1UODdT/FjNzx8gF1Yp4E4ygX8xwQPl9i/BQKBgQCegYOmPJZXV4zfe4XUfhtRtZuFzkW5tEP6LxKi" +
"NNxskrN1DGtb09HdDapEMKBRLqWhLJMoA7lAEKfxLHd8koPSAu9xuSFcKer00llULn0bwXTU1zXS8zojYe0AtVfneJWP8/H51vgNq36nKnymwEeHoFGaNj" +
"wS/Fz4L5qILv/dlQKBgEDOix5Zsjbws108rgEQ/fDRB66OzdVhlB093aGlEh3vBen4NkXKnrdSU+5Yv7HSkzryc7f5g4N5iJ1tGglbGJwReB6k3D8V6CDQ" +
"JOY5MKDMyi/c1SvnuVLi+A9FDCZhcBZPH+Enxbf0RDAb7xHZwKCqiFVjj832bzIrq4xvWoMZAoGAbvwx7oJvxtOjY9tOKCmkgHfSaQwgnHhkjgPiE03GE5" +
"Pptn+292sWW/ssfwLsHKOBsa5FoFKp1hKHht/BesENGUXsxvexR0A3dlsmun4Lv4hDm7kd3ggoMMwNb8YcmrRJJyqM1F7xa9mOtq45lezxEcDjkYH/A0kme" +
"Rfy7BF4GI=";

const PARTNER_HASHES = {
  "f9da9b47244ed94920177ebbd15a4ba1163123d8d2c8143232227e24bc83367e": "Snowflake",
  "d8c37f08b71ab1a7965297eddb4a2ebd36542a81372c9c9543a72c6e99cfe7c0": "DXC",
  "0343912023226d37171b4d113cc2f0eabda8e2ac5f5ac9aa681ac142af7630a3": "Capgemini",
  "803984a9d609c107aea6a33b154a4624df15656b7e5e244181955beea0a628f5": "Chiwu",
  "2c83815500cc3c72ce18c5aef01335d8d35f71bcf4b65b83ba63396a29019347": "Keyrus",
  "f5802c2ac61a257b6e5ca391af960bb613b4ff3b8df32b1d2114c15cc5de1656": "Yungoal",
  "858038ceb921759e555232de75aa7d520d07e78d7a74fdad9e0d3288d1c0eedd": "Deloitte",
  "e82ac28844b5e2f215a2fbac020020c6e62e830828a86b5f6e68c6517c5c832e": "HAND",
  "3f1aa9be12841270747a8b5666f044459d06a4d84aa6104e5d6bbc171d224fc5": "Thundersoft",
  "9bfadccdbbe7485286eccb83fc86d862ca39fa27eda0384f5750e6c31ff5dae7": "Yidatec",
  "e1b987bd53562c4a8ce38c4853de12b672be1dd7419b82e524524fac9a078fdf": "Atos",
  "bb98a8eebf3192ad54df4b02c1608d69fed6b1602db8522a8f5d6d6301fbb900": "TCS"
};

let trackCount = 0;
const MAX_TRACK_PER_SESSION = 20;

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function getJWT() {
  const keyDer = Uint8Array.from(atob(SF_KEY), c => c.charCodeAt(0));
  const privateKey = await crypto.subtle.importKey("pkcs8", keyDer, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, true, ["sign"]);
  const pubKey = await crypto.subtle.exportKey("jwk", privateKey);
  delete pubKey.d; delete pubKey.dp; delete pubKey.dq; delete pubKey.p; delete pubKey.q; delete pubKey.qi;
  pubKey.key_ops = ["verify"];
  const pubCryptoKey = await crypto.subtle.importKey("jwk", pubKey, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, true, ["verify"]);
  const spki = await crypto.subtle.exportKey("spki", pubCryptoKey);
  const fpBuf = await crypto.subtle.digest("SHA-256", spki);
  const fp = btoa(String.fromCharCode(...new Uint8Array(fpBuf)));

  const account = "SFSEAPAC-LINGXIAO_AWS1";
  const qualifiedUser = `${account}.${SF_USER}`;
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = { iss: `${qualifiedUser}.SHA256:${fp}`, sub: qualifiedUser, iat: now, exp: now + 3600 };

  const enc = (obj) => btoa(JSON.stringify(obj)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const signingInput = enc(header) + "." + enc(payload);
  const sig = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", privateKey, new TextEncoder().encode(signingInput));
  const sigB64 = btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return signingInput + "." + sigB64;
}

async function trackAction(partner, webinar, action) {
  if (trackCount >= MAX_TRACK_PER_SESSION) return;
  trackCount++;
  try {
    const token = await getJWT();
    const sql = `INSERT INTO PARTNER_HUB.TRACKING.ACCESS_LOG (partner_name, webinar_title, action) VALUES ('${partner.replace(/'/g, "''")}', '${webinar.replace(/'/g, "''")}', '${action}')`;
    await fetch(`https://${SF_ACCOUNT}.snowflakecomputing.com/api/v2/statements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "PartnerHub/1.0",
        "Authorization": `Bearer ${token}`,
        "X-Snowflake-Authorization-Token-Type": "KEYPAIR_JWT",
      },
      body: JSON.stringify({ statement: sql, warehouse: SF_WAREHOUSE, database: SF_DATABASE, schema: SF_SCHEMA, timeout: 30 }),
    });
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let data = { webinars: [], links: [] };
  let activeWebinarFilter = "全部";
  let currentPartner = sessionStorage.getItem("partner") || "";

  if (currentPartner) {
    showApp();
  }

  document.getElementById("login-btn").addEventListener("click", doLogin);
  document.getElementById("login-passcode").addEventListener("keydown", e => {
    if (e.key === "Enter") doLogin();
  });

  async function doLogin() {
    const input = document.getElementById("login-passcode");
    const error = document.getElementById("login-error");
    const btn = document.getElementById("login-btn");
    const passcode = input.value.trim();
    if (!passcode) return;

    btn.textContent = "验证中...";
    btn.disabled = true;
    error.style.display = "none";

    const hash = await sha256(passcode);
    const partner = PARTNER_HASHES[hash];

    if (partner) {
      currentPartner = partner;
      sessionStorage.setItem("partner", currentPartner);
      trackAction(partner, "登录成功", "login");
      showApp();
    } else {
      error.style.display = "block";
    }
    btn.textContent = "进入";
    btn.disabled = false;
  }

  function showApp() {
    document.getElementById("login-overlay").classList.add("hidden");
    document.body.classList.remove("app-hidden");
    loadData();
  }

  function loadData() {
    fetch("data.json")
      .then(r => r.json())
      .then(d => {
        data = d;
        renderLinks();
        renderFilters();
        renderWebinars();
      });
  }

  function renderLinks() {
    const list = document.getElementById("link-list");
    list.innerHTML = (data.links || []).map(l => `
      <div class="link-card" style="border-top: 4px solid ${l.color}" onclick="window.open('${l.url}', '_blank')">
        <div class="link-card-title">${l.title}</div>
        <div class="link-card-desc">${l.description}</div>
      </div>
    `).join("");
  }

  function getAllTags(items) {
    const tags = new Set();
    items.forEach(item => (item.tags || []).forEach(t => tags.add(t)));
    return ["全部", ...tags];
  }

  function renderFilters() {
    renderFilterBar("webinar-filters", getAllTags(data.webinars), activeWebinarFilter, tag => {
      activeWebinarFilter = tag;
      renderFilters();
      renderWebinars();
    });
  }

  function renderFilterBar(containerId, tags, active, onClick) {
    const container = document.getElementById(containerId);
    container.innerHTML = tags.map(tag =>
      `<span class="filter-tag ${tag === active ? "active" : ""}" data-tag="${tag}">${tag}</span>`
    ).join("");
    container.querySelectorAll(".filter-tag").forEach(el => {
      el.addEventListener("click", () => onClick(el.dataset.tag));
    });
  }

  function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
      const orig = btn.textContent;
      btn.textContent = "已复制!";
      btn.classList.add("copied");
      setTimeout(() => { btn.textContent = orig; btn.classList.remove("copied"); }, 1500);
    });
  }

  window.copyPasscode = function(text, el, e) {
    if (e) e.stopPropagation();
    copyToClipboard(text, el);
  };

  window.openAttachment = function(url, e) {
    if (e) e.stopPropagation();
    window.open(url, "_blank");
  };

  window.openWebinar = function(title, url, e) {
    trackAction(currentPartner, title, "view");
    window.open(url, "_blank");
  };

  function renderWebinars() {
    const list = document.getElementById("webinar-list");
    const empty = document.getElementById("webinar-empty");
    const filtered = (activeWebinarFilter === "全部"
      ? data.webinars
      : data.webinars.filter(w => (w.tags || []).includes(activeWebinarFilter)))
      .sort((a, b) => b.date.localeCompare(a.date));

    if (filtered.length === 0) {
      list.innerHTML = "";
      empty.style.display = "block";
      return;
    }
    empty.style.display = "none";

    list.innerHTML = filtered.map(w => {
      const passcodeHtml = w.passcode
        ? `<div class="card-passcode">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            <span>需要密码</span>
            <button class="copy-btn" onclick="copyPasscode('${w.passcode.replace(/'/g, "\\'")}', this, event)">点击复制密码</button>
          </div>`
        : "";

      const attachLinks = (w.attachments && w.attachments.length > 0)
        ? w.attachments.map(a => `<a class="attach-link" onclick="openAttachment('${a.url}', event)" title="${a.name}">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/></svg>
              ${a.name}
            </a>`).join("")
        : "";

      const docLink = w.docUrl
        ? `<a class="attach-link doc-link" onclick="openAttachment('${w.docUrl}', event)" title="官方文档">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
            官方文档
          </a>`
        : "";

      const linksHtml = (attachLinks || docLink)
        ? `<div class="card-attachments">${attachLinks}${docLink}</div>`
        : "";

      const safeTitle = w.title.replace(/'/g, "\\'");
      return `
      <div class="card" onclick="openWebinar('${safeTitle}', '${w.videoUrl}', event)">
        <div class="card-date">${w.date}</div>
        <div class="card-title">${w.title}</div>
        <div class="card-desc">${(w.description || "").replace(/\n/g, "<br>")}</div>
        ${passcodeHtml}
        ${linksHtml}
        <div class="card-tags">${(w.tags || []).map(t => `<span class="card-tag">${t}</span>`).join("")}</div>
        <span class="card-action">观看录屏 &rarr;</span>
      </div>`;
    }).join("");
  }
});
