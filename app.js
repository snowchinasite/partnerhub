document.addEventListener("DOMContentLoaded", () => {
  let data = { webinars: [] };
  let activeWebinarFilter = "全部";

  fetch("data.json")
    .then(r => r.json())
    .then(d => {
      data = d;
      renderFilters();
      renderWebinars();
    });


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

      return `
      <div class="card" onclick="window.open('${w.videoUrl}', '_blank')">
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
