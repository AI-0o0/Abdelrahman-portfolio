const STORAGE_KEYS = {
  blogs: "portfolio.blogs",
};

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
    contentHtml:
      "<p>Machine learning projects become easier when you treat them as a workflow, not a magic trick.</p>",
    customCss: "",
  },
];

const $ = (id) => document.getElementById(id);
let blogs = readJson(STORAGE_KEYS.blogs, DEFAULT_BLOGS);
let activeBlogId = "";
let autoFilename = false;
let siteDirectoryHandle = null;

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function showStatus(message) {
  $("editor-status").textContent = message;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function csvToArray(value) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function arrayToCsv(value) {
  return Array.isArray(value) ? value.join(", ") : "";
}

function slugifyTitle(title) {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `${slug || "blog-post"}.html`;
}

function normalizeHtmlFilename(value) {
  const clean = String(value || "")
    .trim()
    .replace(/\\/g, "/")
    .split("/")
    .pop()
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
  const filename = clean || "blog-post.html";
  return filename.endsWith(".html") ? filename : `${filename}.html`;
}

function nextId(items) {
  return items.length ? Math.max(...items.map((item) => Number(item.id) || 0)) + 1 : 1;
}

function setLoggedIn(isLoggedIn) {
  sessionStorage.setItem("portfolio.admin.loggedIn", isLoggedIn ? "true" : "false");
  $("login-panel").classList.toggle("hidden", isLoggedIn);
  $("editor-dashboard").classList.toggle("hidden", !isLoggedIn);
  if (isLoggedIn) hydrate();
}

function hydrate() {
  renderPostSelect();
  fillForm(blogs[0]);
  updateHtmlOutput();
}

function renderPostSelect() {
  $("post-select").innerHTML = blogs.length
    ? blogs.map((blog) => `<option value="${blog.id}">${escapeHtml(blog.title)}</option>`).join("")
    : '<option value="">No posts yet</option>';
}

function fillForm(blog) {
  activeBlogId = blog?.id || "";
  autoFilename = !blog;
  $("post-select").value = activeBlogId;
  $("post-title").value = blog?.title || "";
  $("post-file").value = blog?.link || "";
  $("post-date").value = blog?.date || new Date().toISOString().slice(0, 10);
  $("post-category").value = blog?.category || "";
  $("post-tags").value = arrayToCsv(blog?.tags);
  $("post-reading").value = blog?.readingTime || "";
  $("post-summary").value = blog?.summary || "";
  $("post-css").value = blog?.customCss || "";
  $("editor").innerHTML =
    blog?.contentHtml ||
    blog?.content
      ?.split(/\n{2,}/)
      .map((block) => `<p>${escapeHtml(block)}</p>`)
      .join("") ||
    "<h2>Start writing your post</h2><p>Select text and use the toolbar, or insert images, videos, embeds, code blocks, and custom HTML.</p>";
  updateHtmlOutput();
}

function getPostFromForm() {
  const title = $("post-title").value.trim();
  return {
    id: activeBlogId || nextId(blogs),
    title,
    date: $("post-date").value || new Date().toISOString().slice(0, 10),
    category: $("post-category").value.trim() || "Article",
    tags: csvToArray($("post-tags").value),
    readingTime: $("post-reading").value.trim() || "5 min read",
    summary: $("post-summary").value.trim(),
    link: normalizeHtmlFilename($("post-file").value || slugifyTitle(title)),
    contentHtml: $("editor").innerHTML.trim(),
    customCss: $("post-css").value.trim(),
  };
}

function savePostToStorage(post) {
  blogs = activeBlogId
    ? blogs.map((item) => (String(item.id) === String(activeBlogId) ? post : item))
    : [post, ...blogs];
  writeJson(STORAGE_KEYS.blogs, blogs);
  renderPostSelect();
  fillForm(post);
}

function buildBlogPage(post) {
  const tags = post.tags
    .map((tag) => `<span class="tag"># ${escapeHtml(tag)}</span>`)
    .join("\n              ");
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(post.summary)}" />
    <title>${escapeHtml(post.title)} | Abdelrahman Eslam</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
    <style>
${post.customCss || ""}
    </style>
  </head>
  <body>
    <nav id="nav" class="scrolled">
      <div class="nav-inner">
        <a href="index.html#hero" class="nav-logo">AE<span>.</span></a>
        <ul class="nav-links">
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#projects">Projects</a></li>
          <li><a href="index.html#blog">Blog</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
        <div class="nav-right">
          <a href="index.html#blog" class="btn btn-outline">Back to Blog</a>
        </div>
      </div>
    </nav>
    <main class="blog-page">
      <article class="blog-article">
        <a class="blog-back-link" href="index.html#blog">← Back to all posts</a>
        <header class="blog-article-head">
          <div class="blog-article-meta">
            <span class="badge badge-blue">${escapeHtml(post.category)}</span>
            <span>${escapeHtml(post.date)}</span>
            <span>${escapeHtml(post.readingTime)}</span>
          </div>
          <h1>${escapeHtml(post.title)}</h1>
          <p>${escapeHtml(post.summary)}</p>
          <div class="blog-tags">
            ${tags}
          </div>
        </header>
        <div class="blog-article-body">
          ${post.contentHtml}
        </div>
      </article>
    </main>
  </body>
</html>
`;
}

function updateHtmlOutput() {
  $("html-output").value = $("editor").innerHTML.trim();
}

function exec(command, value = null) {
  $("editor").focus();
  document.execCommand(command, false, value);
  updateHtmlOutput();
}

function insertHtml(html) {
  $("editor").focus();
  document.execCommand("insertHTML", false, html);
  updateHtmlOutput();
}

function selectedText() {
  return window.getSelection().toString();
}

function youtubeEmbed(url) {
  const match = String(url).match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]+)/
  );
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

async function chooseSiteFolder() {
  if (!("showDirectoryPicker" in window)) {
    showStatus("Direct page creation needs Chrome or Edge. Use Download instead.");
    return null;
  }
  siteDirectoryHandle = await window.showDirectoryPicker({
    id: "portfolio-site-folder",
    mode: "readwrite",
  });
  showStatus("Site folder selected.");
  return siteDirectoryHandle;
}

async function writePage(post) {
  if (!siteDirectoryHandle) await chooseSiteFolder();
  if (!siteDirectoryHandle) return false;
  const filename = normalizeHtmlFilename(post.link);
  const fileHandle = await siteDirectoryHandle.getFileHandle(filename, {
    create: true,
  });
  const writable = await fileHandle.createWritable();
  await writable.write(buildBlogPage({ ...post, link: filename }));
  await writable.close();
  showStatus(`Created ${filename} and updated the blog list.`);
  return true;
}

function downloadPage(post) {
  const filename = normalizeHtmlFilename(post.link);
  const blob = new Blob([buildBlogPage(post)], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showStatus(`Downloaded ${filename}.`);
}

$("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const env = window.ADMIN_ENV || {};
  const username = env.ADMIN_USERNAME || env.username || "admin";
  const password = env.ADMIN_PASSWORD || env.password || "portfolio123";
  if ($("username").value === username && $("password").value === password) {
    $("login-message").textContent = "";
    setLoggedIn(true);
  } else {
    $("login-message").textContent = "Wrong username or password.";
  }
});

$("logout-btn").addEventListener("click", () => setLoggedIn(false));

$("post-select").addEventListener("change", () => {
  fillForm(blogs.find((blog) => String(blog.id) === $("post-select").value));
});

$("new-post-btn").addEventListener("click", () => fillForm(null));

$("post-title").addEventListener("input", () => {
  if (autoFilename) $("post-file").value = slugifyTitle($("post-title").value);
});

$("post-file").addEventListener("input", () => {
  autoFilename = false;
});

$("choose-folder-btn").addEventListener("click", async () => {
  try {
    await chooseSiteFolder();
  } catch {
    showStatus("Folder access was cancelled.");
  }
});

$("save-page-btn").addEventListener("click", async () => {
  const post = getPostFromForm();
  if (!post.title || !post.summary) {
    showStatus("Add a title and summary before saving.");
    return;
  }
  savePostToStorage(post);
  try {
    await writePage(post);
  } catch (error) {
    console.error(error);
    showStatus("Post saved to the blog list, but the page file was not created.");
  }
});

$("download-page-btn").addEventListener("click", () => {
  const post = getPostFromForm();
  if (!post.title || !post.summary) {
    showStatus("Add a title and summary before downloading.");
    return;
  }
  savePostToStorage(post);
  downloadPage(post);
});

document.querySelectorAll("[data-command]").forEach((button) => {
  button.addEventListener("click", () => {
    exec(button.dataset.command, button.dataset.value || null);
  });
});

$("font-name").addEventListener("change", (event) => exec("fontName", event.target.value));
$("font-size").addEventListener("change", (event) => exec("fontSize", event.target.value));
$("text-color").addEventListener("input", (event) => exec("foreColor", event.target.value));
$("bg-color").addEventListener("input", (event) => exec("hiliteColor", event.target.value));

$("link-btn").addEventListener("click", () => {
  const url = prompt("Link URL");
  if (url) exec("createLink", url);
});

$("image-url-btn").addEventListener("click", () => {
  const url = prompt("Image URL");
  if (url) insertHtml(`<figure><img src="${escapeHtml(url)}" alt="" /></figure>`);
});

$("upload-image-btn").addEventListener("click", () => $("image-file").click());

$("image-file").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => insertHtml(`<figure><img src="${reader.result}" alt="" /></figure>`);
  reader.readAsDataURL(file);
  event.target.value = "";
});

$("video-btn").addEventListener("click", () => {
  const url = prompt("YouTube, Vimeo, or direct video URL");
  if (!url) return;
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    insertHtml(`<div class="embed-frame"><iframe src="${escapeHtml(youtubeEmbed(url))}" allowfullscreen></iframe></div>`);
  } else {
    insertHtml(`<video controls src="${escapeHtml(url)}"></video>`);
  }
});

$("embed-btn").addEventListener("click", () => {
  const html = prompt("Paste embed iframe/script/html");
  if (html) insertHtml(`<div class="embed-frame">${html}</div>`);
});

$("code-btn").addEventListener("click", () => {
  const code = prompt("Paste code");
  if (code) insertHtml(`<pre><code>${escapeHtml(code)}</code></pre>`);
});

$("html-btn").addEventListener("click", () => {
  const html = prompt("Paste raw HTML");
  if (html) insertHtml(html);
});

$("animation-btn").addEventListener("click", () => {
  const text = selectedText() || "Animated text";
  const type = prompt("Animation class: fade or pop", "fade");
  const cls = type === "pop" ? "animate-pop" : "animate-fade";
  insertHtml(`<span class="${cls}">${escapeHtml(text)}</span>`);
});

$("editor").addEventListener("input", updateHtmlOutput);

setLoggedIn(sessionStorage.getItem("portfolio.admin.loggedIn") === "true");
