/* ============================================================
   BLOG ARCHIVE SCRIPT — ABDELRAHMAN ESLAM
   Data Source: data.json (with LocalStorage override fallback)
   ============================================================ */

const DEFAULT_BLOGS = [
  {
    id: 1,
    title: "Mastering AI Coding Agents: Essential Habits, AGENTS.md, and Custom Skills",
    date: "2026-08-16",
    category: "AI Agents",
    tags: ["AI Agents", "LLMs", "DevTools", "Best Practices", "Workflows"],
    readingTime: "5 min read",
    summary:
      "A practical playbook for steering LLM coding agents: task scoping, Plan Mode, context hygiene, AGENTS.md conventions, and modular skill systems.",
    link: "../working-with-coding-agents.html",
  },
];

const STORAGE_KEY = "portfolio.blogs";

let REMOTE_DATA = null;

async function loadRemoteData() {
  try {
    const response = await fetch("../data.json", { cache: "no-cache" });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

function readStoredJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    if (!value) return fallback;
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed) && parsed.length === 0 && Array.isArray(fallback) && fallback.length > 0) {
      return fallback;
    }
    return parsed;
  } catch {
    return fallback;
  }
}

let BLOGS = readStoredJson(STORAGE_KEY, DEFAULT_BLOGS);
let blogCat = "All";

/* Theme Toggle */
const html = document.documentElement;
const themeBtn = document.getElementById("theme-btn");
const iconSun = document.getElementById("theme-icon-sun");
const iconMoon = document.getElementById("theme-icon-moon");

function updateThemeIcons(isDark) {
  if (iconSun && iconMoon) {
    if (isDark) {
      iconSun.classList.remove("hidden");
      iconMoon.classList.add("hidden");
    } else {
      iconSun.classList.add("hidden");
      iconMoon.classList.remove("hidden");
    }
  }
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved === "dark" : prefersDark;
  html.setAttribute("data-theme", isDark ? "dark" : "light");
  updateThemeIcons(isDark);
}

function toggleTheme() {
  const isDark = html.getAttribute("data-theme") === "dark";
  const next = isDark ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcons(next === "dark");
}

if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}

initTheme();

function formatDate(str) {
  return new Date(str).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function renderBlogs() {
  const searchEl = document.getElementById("blog-search");
  const grid = document.getElementById("blog-grid");
  if (!grid) return;

  const search = searchEl ? searchEl.value.toLowerCase().trim() : "";
  const filtered = [...BLOGS]
    .filter((blog) => {
      const matchCat = blogCat === "All" || blog.category === blogCat;
      const matchSearch =
        !search ||
        blog.title.toLowerCase().includes(search) ||
        blog.summary.toLowerCase().includes(search) ||
        (blog.tags || []).some((tag) => tag.toLowerCase().includes(search));
      return matchCat && matchSearch;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="no-results" style="grid-column:1/-1">No articles match your search criteria.</div>';
    return;
  }

  grid.innerHTML = filtered
    .map((b) => {
      const tags = (b.tags || []).map((t) => `<span class="tag"># ${t}</span>`).join("");
      const link = !b.link || b.link === "#"
        ? "#"
        : b.link.startsWith("http") || b.link.startsWith("../")
        ? b.link
        : b.link.startsWith("blog/")
        ? `../${b.link}`
        : `../${b.link}`;

      return `
    <article class="card blog-card">
      <div class="blog-card-body">
        <div class="blog-card-top">
          <span class="card-meta">${b.category || "AI"}</span>
          <span class="blog-date">${formatDate(b.date)}</span>
        </div>
        <h3 class="blog-title">${b.title}</h3>
        <p class="blog-summary">${b.summary}</p>
        <div class="blog-tags">${tags}</div>
        <div class="blog-footer">
          <span class="reading-time">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            ${b.readingTime || "5 min read"}
          </span>
          <a href="${link}" class="read-more">
            <span>Read article</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </div>
      </div>
    </article>`;
    })
    .join("");
}

function setBlogFilter(btn) {
  document
    .querySelectorAll("#blog-filters .filter-pill")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  blogCat = btn.dataset.cat;
  renderBlogs();
}

function filterBlogs() {
  renderBlogs();
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

async function init() {
  renderBlogs();
  const data = await loadRemoteData();
  if (data && data.blogs && Array.isArray(data.blogs) && data.blogs.length > 0) {
    REMOTE_DATA = data;
    BLOGS = data.blogs;
    renderBlogs();
  }
}

init();
