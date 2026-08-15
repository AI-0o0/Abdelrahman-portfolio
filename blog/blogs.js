/* ============================================================
   BLOG ARCHIVE SCRIPT — ABDELRAHMAN ESLAM
   Data Source: data.json (with LocalStorage override fallback)
   ============================================================ */

const DEFAULT_BLOGS = [
  {
    id: 1,
    title: "Getting Started with Machine Learning: A Practical Guide",
    date: "2025-05-01",
    category: "Machine Learning",
    tags: ["Python", "Scikit-learn", "Beginners"],
    readingTime: "8 min read",
    summary:
      "A beginner-friendly walkthrough of the ML workflow, from data preprocessing to model evaluation.",
    link: "../blog-post-1.html",
  },
  {
    id: 2,
    title: "Feature Engineering Secrets That Boosted My Model to 96% R²",
    date: "2025-04-15",
    category: "Data Science",
    tags: ["Feature Engineering", "Regression", "Tips"],
    readingTime: "6 min read",
    summary:
      "Lessons from the FIFA player value prediction project — how log transformation and domain-driven features made all the difference.",
    link: "#",
  },
  {
    id: 3,
    title: "Linear Regression From Scratch with NumPy",
    date: "2025-03-20",
    category: "Machine Learning",
    tags: ["NumPy", "Math", "Implementation"],
    readingTime: "10 min read",
    summary:
      "Implementing gradient descent, the normal equation, and L1/L2 regularization from scratch in NumPy — and understanding the math behind them.",
    link: "#",
  },
];

const STORAGE_KEY = "portfolio.blogs";
const CAT_BADGE_CLASS = {
  "Machine Learning": "badge-blue",
  "Data Science": "badge-green",
  "Deep Learning": "badge-amber",
  NLP: "badge-red",
  Career: "badge-gray",
};

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
    return value ? JSON.parse(value) : fallback;
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
      const link = b.link === "blog-post-1.html" ? "../blog-post-1.html" : b.link || "#";

      return `
    <article class="card blog-card">
      <div class="blog-card-body">
        <div class="blog-card-top">
          <span class="badge ${CAT_BADGE_CLASS[b.category] || "badge-blue"}">${b.category || "AI"}</span>
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
            <span>Read post</span>
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
  if (data && data.blogs) {
    REMOTE_DATA = data;
    BLOGS = readStoredJson(STORAGE_KEY, data.blogs);
    renderBlogs();
  }
}

init();
