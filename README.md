# Snowflake中国合作伙伴资料站

## 如何更新内容

所有内容由 `data.json` 控制，只需编辑这个文件即可。

### 添加新的 Webinar 录屏

在 `data.json` 的 `webinars` 数组里添加一条：

```json
{
  "title": "Webinar 标题",
  "date": "2025-08-01",
  "speaker": "主讲人",
  "description": "简要描述内容。",
  "videoUrl": "https://zoom.us/rec/share/你的链接",
  "passcode": "密码（没有则留空字符串）",
  "tags": ["标签1", "标签2"],
  "attachments": [
    { "name": "演示PPT.pptx", "url": "docs/演示PPT.pptx" }
  ],
  "notes": "补充说明（可选，留空字符串则不显示）"
}
```

字段说明：
- `passcode`：Zoom 录屏密码，页面上会显示并支持一键复制
- `attachments`：附件列表，每项包含 `name`（显示名）和 `url`（文件路径或链接）
- `notes`：补充说明，如前置知识、配套资料等

### 添加新的下载文档

1. 把 PDF 文件放到 `docs/` 文件夹
2. 在 `data.json` 的 `documents` 数组里添加一条：

```json
{
  "title": "文档标题",
  "filename": "你的文件名.pdf",
  "date": "2025-08-01",
  "description": "文档描述。",
  "tags": ["标签"]
}
```

### 发布更新

```bash
git add . && git commit -m "添加新内容" && git push
```

推送后 GitHub Pages 会自动更新，通常 1-2 分钟生效。

## 本地预览

```bash
cd partner-site
python3 -m http.server 8080
```

然后访问 http://localhost:8080

## 目录结构

```
partner-site/
├── index.html      # 主页面
├── style.css       # 样式
├── app.js          # 交互逻辑
├── data.json       # 内容数据（编辑这个文件来更新内容）
├── docs/           # PDF 文档目录
└── README.md       # 本说明
```
