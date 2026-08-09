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
    link: "blog-post-1.html",
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
    const response = await fetch("data.json", { cache: "no-cache" });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

let BLOGS = readStoredJson(STORAGE_KEY, DEFAULT_BLOGS);
let blogCat = "All";

function readStoredJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function initTheme() {
  const html = document.documentElement;
  const themeBtn = document.getElementById("theme-btn");
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved === "dark" : prefersDark;

  html.setAttribute("data-theme", isDark ? "dark" : "light");
  themeBtn.textContent = isDark ? "☀️" : "🌙";

  themeBtn.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

function formatDate(str) {
  return new Date(str).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function renderBlogs() {
  const search = document.getElementById("blog-search").value.toLowerCase();
  const grid = document.getElementById("blog-grid");
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
      '<div class="no-results" style="grid-column:1/-1">No articles match your search.</div>';
    return;
  }

  grid.innerHTML = filtered
    .map(
      (blog) => `
    <article class="card blog-card">
      <div class="blog-card-body">
        <div class="blog-card-top">
          <span class="badge ${
            CAT_BADGE_CLASS[blog.category] || "badge-gray"
          }">${blog.category}</span>
          <span class="blog-date">${formatDate(blog.date)}</span>
        </div>
        <h3 class="blog-title">${blog.title}</h3>
        <p class="blog-summary">${blog.summary}</p>
        <div class="blog-tags">
          ${(blog.tags || [])
            .map((tag) => `<span class="tag"># ${tag}</span>`)
            .join("")}
        </div>
        <div class="blog-footer">
          <span class="reading-time">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
            ${blog.readingTime}
          </span>
          <a href="${blog.link}" class="read-more">
            Read more
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </a>
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function setBlogFilter(btn) {
  document
    .querySelectorAll("#blog-filters .filter-pill")
    .forEach((button) => button.classList.remove("active"));
  btn.classList.add("active");
  blogCat = btn.dataset.cat;
  renderBlogs();
}

function filterBlogs() {
  renderBlogs();
}

initTheme();
renderBlogs();

async function refreshFromRemoteData() {
  const data = await loadRemoteData();
  if (!data) return;
  REMOTE_DATA = data;
  BLOGS = readStoredJson(STORAGE_KEY, data.blogs || DEFAULT_BLOGS);
  renderBlogs();
}

refreshFromRemoteData();
