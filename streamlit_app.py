import streamlit as st
import pandas as pd
from snowflake.snowpark.context import get_active_session
from time import sleep

st.set_page_config(layout="wide")

session = get_active_session()

def query(sql):
    return session.sql(sql).to_pandas()

col_title, col_refresh = st.columns([3, 1])
col_title.title("Partner Hub 访问监控")
auto = col_refresh.toggle("自动刷新 (30s)", value=False)

if auto:
    sleep(30)
    st.rerun()

col1, col2, col3 = st.columns(3)

total_views = query("SELECT COUNT(*) AS CNT FROM PARTNER_HUB.TRACKING.ACCESS_LOG WHERE action = 'view'")
total_logins = query("SELECT COUNT(*) AS CNT FROM PARTNER_HUB.TRACKING.ACCESS_LOG WHERE action = 'login'")
unique_partners = query("SELECT COUNT(DISTINCT partner_name) AS CNT FROM PARTNER_HUB.TRACKING.ACCESS_LOG")

col1.metric("总观看次数", int(total_views["CNT"].iloc[0]))
col2.metric("总登录次数", int(total_logins["CNT"].iloc[0]))
col3.metric("活跃 Partner 数", int(unique_partners["CNT"].iloc[0]))

st.divider()

st.subheader("各 Partner 观看明细")

partner_filter = query("SELECT DISTINCT partner_name FROM PARTNER_HUB.TRACKING.ACCESS_LOG ORDER BY partner_name")
partners = ["全部"] + partner_filter["PARTNER_NAME"].tolist()
selected = st.selectbox("筛选 Partner", partners)

if selected == "全部":
    logs = query("""
        SELECT partner_name AS "Partner", webinar_title AS "Webinar", action AS "操作",
               ip_address AS "IP", created_at AS "时间"
        FROM PARTNER_HUB.TRACKING.ACCESS_LOG
        ORDER BY created_at DESC
        LIMIT 500
    """)
else:
    logs = query(f"""
        SELECT partner_name AS "Partner", webinar_title AS "Webinar", action AS "操作",
               ip_address AS "IP", created_at AS "时间"
        FROM PARTNER_HUB.TRACKING.ACCESS_LOG
        WHERE partner_name = '{selected}'
        ORDER BY created_at DESC
        LIMIT 500
    """)

st.dataframe(logs, use_container_width=True)

st.divider()

st.subheader("各 Webinar 观看排行")
webinar_rank = query("""
    SELECT webinar_title AS "Webinar", COUNT(*) AS "观看次数",
           COUNT(DISTINCT partner_name) AS "Partner 数"
    FROM PARTNER_HUB.TRACKING.ACCESS_LOG
    WHERE action = 'view'
    GROUP BY webinar_title
    ORDER BY "观看次数" DESC
""")
st.dataframe(webinar_rank, use_container_width=True)

st.divider()

st.subheader("Partner 密码管理")
partner_list = query("SELECT partner_name, passcode, enabled, created_at FROM PARTNER_HUB.TRACKING.PARTNERS ORDER BY created_at DESC")
st.dataframe(partner_list, use_container_width=True)
