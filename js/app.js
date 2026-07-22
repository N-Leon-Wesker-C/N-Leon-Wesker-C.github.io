// ===== 双语系统 =====
// HTML 中的中文是唯一数据源，lang.js 只存英文翻译
// 切中文 → 恢复原始 HTML 内容（缓存）
// 切英文 → 用 translations[key] 替换

const _origin = {};
let currentLang = "zh";

function switchLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (!k) return;
    if (lang === "zh") {
      // 恢复原始中文
      if (_origin[k] !== undefined) el.innerHTML = _origin[k];
    } else {
      // 首次缓存原始中文
      if (_origin[k] === undefined) _origin[k] = el.innerHTML;
      // 用英文替换（如果存在），否则保持中文
      const en = translations[k];
      if (en !== undefined) el.innerHTML = en;
    }
  });

  // 更新语言按钮激活态
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });

  localStorage.setItem("lang", lang);
}

// ===== 页面初始化 =====
function initLang() {
  const saved = localStorage.getItem("lang") || "zh";
  // 先缓存所有元素当前的中文内容
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (k && _origin[k] === undefined) _origin[k] = el.innerHTML;
  });
  // 如果保存的语言不是中文，切换到对应语言
  if (saved !== "zh") switchLang(saved);
}

// ===== 公共组件加载 =====
async function loadComponent(id, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return;
    const html = await res.text();
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  } catch (_) {
    // 静默失败 — 组件加载失败时页面仍可用
  }
}

// ===== 非主页导航链接修正 =====
// 主页的导航是锚点链接（#about），在其他页面需要改为 index.html#about
function fixNavLinks() {
  const page = location.pathname.split("/").pop() || "";
  const isIndex = page === "" || page === "index.html";
  if (isIndex) return;
  document.querySelectorAll(".nav-links a[href^='#']").forEach(a => {
    a.href = "index.html" + a.getAttribute("href");
  });
}

// ===== 渐入动画 =====
const _obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.08 });
document.querySelectorAll(".fade-in").forEach(el => _obs.observe(el));

// ===== 启动 =====
Promise.all([
  loadComponent("header-placeholder", "components/header.html"),
  loadComponent("footer-placeholder", "components/footer.html")
]).then(() => {
  fixNavLinks();
  initLang();
});
