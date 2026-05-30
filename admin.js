const STORAGE_KEYS = {
  profile: "portfolio.profile",
  projects: "portfolio.projects",
  blogs: "portfolio.blogs",
  homepage: "portfolio.homepage",
};

const DEFAULT_PROFILE = {
  name: "Abdelrahman Eslam Omar",
  heroBio:
    'Data Science student at <strong>Alexandria University</strong> building ML pipelines, uncovering insights from data, and learning something new every day. Currently seeking <strong>internships</strong> and hands-on AI projects.',
  aboutHtml:
    '<p>I\'m <strong>Abdelrahman Eslam Omar</strong>, a first-year Data Science student at <strong>Alexandria University</strong> (Class of 2028) with a real passion for turning messy data into meaningful insights.</p><p>I\'ve built ML pipelines that achieved <strong>96% R2</strong> on regression tasks, led a 10-member team project, and completed practical training in data analysis.</p><p>I\'m currently focused on strengthening my machine learning foundations, learning deep learning, and building a portfolio that shows clear, practical problem-solving.</p><div class="about-tags"><span class="badge badge-blue">Open to Internships</span><span class="badge badge-green">Open to Research</span><span class="badge badge-gray">Remote-Friendly</span></div>',
  email: "abdelrahmaneslamomar@gmail.com",
  footerText: "Built with love and Python by Abdelrahman Eslam",
};

const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "Nobel Prize Winners Analysis",
    description:
      "Analyzed over 100 years of Nobel Prize data using Python, Pandas, and Seaborn to uncover trends in U.S. Nobel Prize winners.",
    category: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    icon: "AI",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
    highlights: ["100+ years of data", "Trend analysis", "Published report"],
    github: "https://github.com/AI-0o0",
    demo: "",
  },
  {
    id: 2,
    title: "FIFA Player Value Prediction",
    description:
      "End-to-end ML pipeline to predict FIFA player market values and classify performance levels.",
    category: "Machine Learning",
    difficulty: "Advanced",
    status: "Completed",
    icon: "ML",
    technologies: ["Python", "Scikit-learn", "Pandas", "GridSearchCV"],
    highlights: ["96.0% R2", "85.6% accuracy", "End-to-end pipeline"],
    github: "https://github.com/AI-0o0",
    demo: "",
  },
  {
    id: 3,
    title: "House Price Prediction",
    description:
      "Led a 10-member team to predict house prices with the Ames Housing dataset and linear regression from scratch.",
    category: "Machine Learning",
    difficulty: "Intermediate",
    status: "Completed",
    icon: "DS",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    highlights: ["Team lead", "0.85 R2", "From-scratch implementation"],
    github: "https://github.com/AI-0o0",
    demo: "",
  },
];

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
    content:
      "Machine learning projects become easier when you treat them as a workflow, not a magic trick.\n\nStart by understanding the problem, inspecting the data, cleaning missing values, and creating features that actually describe the thing you want to predict.\n\nAfter that, train a simple baseline model, measure it clearly, and improve one part at a time.",
  },
];

const DEFAULT_HOMEPAGE = {
  stats: [
    { value: "3", label: "Projects" },
    { value: "3.5", label: "GPA" },
    { value: "'28", label: "Graduation" },
  ],
  skills: [
    { title: "Programming", color: "var(--accent)", items: ["Python", "SQL"] },
    {
      title: "Data Science",
      color: "#0891b2",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
    },
    {
      title: "Machine Learning",
      color: "#7c3aed",
      items: ["Scikit-learn", "Regression", "Classification", "Feature Engineering"],
    },
    {
      title: "Tools & Workflow",
      color: "#059669",
      items: ["Jupyter Notebook", "Google Colab", "Git", "GitHub"],
    },
    {
      title: "Soft Skills",
      color: "#d97706",
      items: ["Problem Solving", "Communication", "Critical Thinking", "Research", "Teamwork"],
    },
    {
      title: "Mathematics",
      color: "#db2777",
      items: ["Linear Algebra", "Statistics", "Probability", "Calculus"],
    },
  ],
  learning: ["Deep Learning", "Neural Networks", "PyTorch", "NLP Fundamentals", "TensorFlow"],
  education: [
    {
      icon: "🎓",
      colorClass: "blue",
      title: "Alexandria University",
      subtitle: "BSc in Data Science",
      period: "Sep 2024 - Jun 2028",
      badges: ["GPA 3.5 / 4.0", "Alexandria, Egypt"],
      bullets: [
        "Focusing on machine learning, statistics, and data engineering",
        "Active in AI-related student communities on campus",
        "Maintaining strong academic performance from day one",
      ],
    },
  ],
  experience: [
    {
      icon: "💼",
      colorClass: "cyan",
      title: "Data Analyst Trainee",
      subtitle: "Skills Dynamics (DEPI)",
      period: "May 2025 - Oct 2025",
      badges: [],
      bullets: [
        "Completing hands-on projects in data analysis using Python and SQL",
        "Cleaning, analyzing, and visualizing datasets with thousands of records",
      ],
    },
  ],
  research: [
    {
      emoji: "🗣️",
      badge: "Exploring",
      badgeClass: "badge-blue",
      title: "Natural Language Processing",
      text: "Understanding how machines process, interpret, and generate human language.",
    },
    {
      emoji: "🤖",
      badge: "Learning",
      badgeClass: "badge-blue",
      title: "Large Language Models",
      text: "Studying foundation model architecture, prompting, and efficient inference.",
    },
    {
      emoji: "🧠",
      badge: "Learning",
      badgeClass: "badge-amber",
      title: "Deep Learning",
      text: "Building neural networks from scratch and learning attention mechanisms.",
    },
  ],
  contactIntro:
    "I'm actively looking for data science and AI internships, research positions, and open-source collaborations. I usually respond within 24 hours.",
  contactItems: [
    {
      icon: "📧",
      label: "Email",
      value: "abdelrahmaneslamomar@gmail.com",
      href: "mailto:abdelrahmaneslamomar@gmail.com",
    },
    { icon: "💻", label: "GitHub", value: "github.com/AI-0o0", href: "https://github.com/AI-0o0" },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/abdelrahmaneslam",
      href: "https://linkedin.com/in/abdelrahmaneslam",
    },
    { icon: "📱", label: "Phone", value: "+20 127 992 9056", href: "tel:+201279929056" },
    { icon: "📍", label: "Location", value: "Alexandria, Egypt", href: "" },
  ],
};

const $ = (id) => document.getElementById(id);

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
  notify("Saved successfully. Open the site in this browser to see the update.");
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

function pretty(value) {
  return JSON.stringify(value, null, 2);
}

function parseJsonField(id, fallback) {
  try {
    return JSON.parse($(id).value);
  } catch (error) {
    throw new Error(`The ${id} field has invalid JSON.`);
  }
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

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function contentToHtml(value) {
  return String(value || "")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) => `<p>${escapeHtml(block).replace(/\n/g, "<br />")}</p>`)
    .join("\n            ");
}

let profile = { ...DEFAULT_PROFILE, ...readJson(STORAGE_KEYS.profile, {}) };
let homepage = { ...DEFAULT_HOMEPAGE, ...readJson(STORAGE_KEYS.homepage, {}) };
let projects = readJson(STORAGE_KEYS.projects, DEFAULT_PROJECTS);
let blogs = readJson(STORAGE_KEYS.blogs, DEFAULT_BLOGS);
let activeProjectId = "";
let activeBlogId = "";
let autoBlogFilename = false;
let siteDirectoryHandle = null;
let toastTimer = null;

function showStatus(message) {
  $("save-status").textContent = message;
}

function showToast(message, type = "success") {
  const toast = $("admin-toast");
  if (!toast) return;
  $("toast-message").textContent = message;
  $("toast-icon").textContent = type === "error" ? "!" : "✓";
  toast.classList.toggle("error", type === "error");
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function notify(message, type = "success") {
  showStatus(message);
  showToast(message, type);
}

function setLoggedIn(isLoggedIn) {
  sessionStorage.setItem("portfolio.admin.loggedIn", isLoggedIn ? "true" : "false");
  $("login-panel").classList.toggle("hidden", isLoggedIn);
  $("dashboard").classList.toggle("hidden", !isLoggedIn);
  if (isLoggedIn) hydrateDashboard();
}

function hydrateDashboard() {
  $("profile-name").value = profile.name;
  $("profile-email").value = profile.email;
  $("profile-hero").value = profile.heroBio;
  $("profile-about").value = profile.aboutHtml;
  $("profile-footer").value = profile.footerText;
  fillHomepageForm();
  renderBlogSelect();
  renderProjectSelect();
  fillBlogForm(blogs[0]);
  fillProjectForm(projects[0]);
  renderExport();
}

function fillHomepageForm() {
  $("home-stats").value = pretty(homepage.stats);
  $("home-skills").value = pretty(homepage.skills);
  $("home-learning").value = pretty(homepage.learning);
  $("home-education").value = pretty(homepage.education);
  $("home-experience").value = pretty(homepage.experience);
  $("home-research").value = pretty(homepage.research);
  $("home-contact-intro").value = homepage.contactIntro || "";
  $("home-contact-items").value = pretty(homepage.contactItems);
}

function renderBlogSelect() {
  $("blog-select").innerHTML = blogs
    .map((blog) => `<option value="${blog.id}">${blog.title}</option>`)
    .join("");
}

function renderProjectSelect() {
  $("project-select").innerHTML = projects
    .map((project) => `<option value="${project.id}">${project.title}</option>`)
    .join("");
}

function fillBlogForm(blog) {
  activeBlogId = blog?.id || "";
  autoBlogFilename = !blog;
  $("blog-select").value = activeBlogId;
  $("blog-title").value = blog?.title || "";
  $("blog-date").value = blog?.date || new Date().toISOString().slice(0, 10);
  $("blog-category").value = blog?.category || "";
  $("blog-tags").value = arrayToCsv(blog?.tags);
  $("blog-reading-time").value = blog?.readingTime || "";
  $("blog-slug").value = blog?.link || "";
  $("blog-link").value = blog?.link || "";
  $("blog-summary").value = blog?.summary || "";
  $("blog-content").value = blog?.content || "";
}

function fillProjectForm(project) {
  activeProjectId = project?.id || "";
  $("project-select").value = activeProjectId;
  $("project-title").value = project?.title || "";
  $("project-description").value = project?.description || "";
  $("project-category").value = project?.category || "";
  $("project-difficulty").value = project?.difficulty || "Intermediate";
  $("project-status").value = project?.status || "Completed";
  $("project-icon").value = project?.icon || "";
  $("project-technologies").value = arrayToCsv(project?.technologies);
  $("project-highlights").value = arrayToCsv(project?.highlights);
  $("project-github").value = project?.github || "";
  $("project-demo").value = project?.demo || "";
}

function nextId(items) {
  return items.length ? Math.max(...items.map((item) => Number(item.id) || 0)) + 1 : 1;
}

function renderExport() {
  $("export-output").value = JSON.stringify({ profile, homepage, projects, blogs }, null, 2);
}

function canWriteSiteFiles() {
  return "showDirectoryPicker" in window;
}

async function chooseSiteFolder() {
  if (!canWriteSiteFiles()) {
    notify(
      "Direct file creation needs Chrome or Edge. Use Download Blog Page as a fallback."
      , "error"
    );
    return null;
  }

  siteDirectoryHandle = await window.showDirectoryPicker({
    id: "portfolio-site-folder",
    mode: "readwrite",
  });
  notify("Site folder selected. Blog pages will be created there automatically.");
  return siteDirectoryHandle;
}

async function writeBlogPageToFolder(blog) {
  if (!siteDirectoryHandle) {
    await chooseSiteFolder();
  }
  if (!siteDirectoryHandle) return false;

  const filename = normalizeHtmlFilename(blog.link || slugifyTitle(blog.title));
  const fileHandle = await siteDirectoryHandle.getFileHandle(filename, {
    create: true,
  });
  const writable = await fileHandle.createWritable();
  await writable.write(buildBlogPage({ ...blog, link: filename }));
  await writable.close();
  notify(`Created ${filename} in your selected site folder.`);
  return true;
}

function getBlogFromForm() {
  const title = $("blog-title").value.trim();
  const link = normalizeHtmlFilename(
    $("blog-link").value.trim() || $("blog-slug").value.trim() || slugifyTitle(title)
  );
  return {
    id: activeBlogId || nextId(blogs),
    title,
    date: $("blog-date").value,
    category: $("blog-category").value.trim(),
    tags: csvToArray($("blog-tags").value),
    readingTime: $("blog-reading-time").value.trim() || "5 min read",
    summary: $("blog-summary").value.trim(),
    link,
    content: $("blog-content").value.trim(),
  };
}

function buildBlogPage(blog) {
  const pageTitle = escapeHtml(blog.title);
  const tags = (blog.tags || "")
    .map((tag) => `<span class="tag"># ${escapeHtml(tag)}</span>`)
    .join("\n              ");
  const articleHtml =
    contentToHtml(blog.content) ||
    `<p>${escapeHtml(blog.summary || "Add your full article content here.")}</p>`;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${escapeHtml(blog.summary)}" />
    <title>${pageTitle} | Abdelrahman Eslam</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
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
            <span class="badge badge-blue">${escapeHtml(blog.category)}</span>
            <span>${escapeHtml(blog.date)}</span>
            <span>${escapeHtml(blog.readingTime)}</span>
          </div>
          <h1>${pageTitle}</h1>
          <p>${escapeHtml(blog.summary)}</p>
          <div class="blog-tags">
            ${tags}
          </div>
        </header>
        <div class="blog-article-body">
            ${articleHtml}
        </div>
      </article>
    </main>
  </body>
</html>
`;
}

function downloadBlogPage(blog) {
  const filename = normalizeHtmlFilename(blog.link || slugifyTitle(blog.title));
  const blob = new Blob([buildBlogPage(blog)], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  notify(`Downloaded ${link.download}. Add it beside index.html before publishing.`);
}

$("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const env = window.ADMIN_ENV || {};
  const username = env.ADMIN_USERNAME || env.username || "admin";
  const password = env.ADMIN_PASSWORD || env.password || "portfolio123";

  if ($("username").value === username && $("password").value === password) {
    $("login-message").textContent = "";
    setLoggedIn(true);
    return;
  }

  $("login-message").textContent = "Wrong username or password.";
});

$("logout-btn").addEventListener("click", () => setLoggedIn(false));

$("profile-form").addEventListener("submit", (event) => {
  event.preventDefault();
  profile = {
    name: $("profile-name").value.trim(),
    email: $("profile-email").value.trim(),
    heroBio: $("profile-hero").value.trim(),
    aboutHtml: $("profile-about").value.trim(),
    footerText: $("profile-footer").value.trim(),
  };
  writeJson(STORAGE_KEYS.profile, profile);
  renderExport();
});

$("homepage-form").addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    homepage = {
      stats: parseJsonField("home-stats", DEFAULT_HOMEPAGE.stats),
      skills: parseJsonField("home-skills", DEFAULT_HOMEPAGE.skills),
      learning: parseJsonField("home-learning", DEFAULT_HOMEPAGE.learning),
      education: parseJsonField("home-education", DEFAULT_HOMEPAGE.education),
      experience: parseJsonField("home-experience", DEFAULT_HOMEPAGE.experience),
      research: parseJsonField("home-research", DEFAULT_HOMEPAGE.research),
      contactIntro: $("home-contact-intro").value.trim(),
      contactItems: parseJsonField("home-contact-items", DEFAULT_HOMEPAGE.contactItems),
    };
    writeJson(STORAGE_KEYS.homepage, homepage);
    renderExport();
  } catch (error) {
    notify(error.message, "error");
  }
});

$("blog-select").addEventListener("change", () => {
  fillBlogForm(blogs.find((blog) => String(blog.id) === $("blog-select").value));
});

$("new-blog-btn").addEventListener("click", () => fillBlogForm(null));

$("site-folder-btn").addEventListener("click", async () => {
  try {
    await chooseSiteFolder();
  } catch (error) {
    notify("Folder access was cancelled.", "error");
  }
});

$("blog-title").addEventListener("input", () => {
  if (autoBlogFilename) {
    const filename = slugifyTitle($("blog-title").value);
    $("blog-slug").value = filename;
    $("blog-link").value = filename;
  }
});

$("blog-slug").addEventListener("input", () => {
  autoBlogFilename = false;
  $("blog-link").value = $("blog-slug").value.trim();
});

$("blog-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const blog = getBlogFromForm();
  blogs = activeBlogId
    ? blogs.map((item) => (String(item.id) === String(activeBlogId) ? blog : item))
    : [blog, ...blogs];
  writeJson(STORAGE_KEYS.blogs, blogs);
  renderBlogSelect();
  fillBlogForm(blog);
  renderExport();
  try {
    await writeBlogPageToFolder(blog);
  } catch (error) {
    console.error(error);
    notify("Blog card saved, but the page file was not created. Try Choose Site Folder.", "error");
  }
});

$("download-blog-btn").addEventListener("click", () => {
  const blog = getBlogFromForm();
  if (!blog.title || !blog.summary) {
    notify("Add a blog title and summary before downloading the page.", "error");
    return;
  }
  downloadBlogPage(blog);
});

$("delete-blog-btn").addEventListener("click", () => {
  if (!activeBlogId) return;
  blogs = blogs.filter((blog) => String(blog.id) !== String(activeBlogId));
  writeJson(STORAGE_KEYS.blogs, blogs);
  renderBlogSelect();
  fillBlogForm(blogs[0]);
  renderExport();
});

$("project-select").addEventListener("change", () => {
  fillProjectForm(
    projects.find((project) => String(project.id) === $("project-select").value)
  );
});

$("new-project-btn").addEventListener("click", () => fillProjectForm(null));

$("project-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const project = {
    id: activeProjectId || nextId(projects),
    title: $("project-title").value.trim(),
    description: $("project-description").value.trim(),
    category: $("project-category").value.trim(),
    difficulty: $("project-difficulty").value,
    status: $("project-status").value,
    icon: $("project-icon").value.trim() || "AI",
    technologies: csvToArray($("project-technologies").value),
    highlights: csvToArray($("project-highlights").value),
    github: $("project-github").value.trim(),
    demo: $("project-demo").value.trim(),
  };
  projects = activeProjectId
    ? projects.map((item) =>
        String(item.id) === String(activeProjectId) ? project : item
      )
    : [project, ...projects];
  writeJson(STORAGE_KEYS.projects, projects);
  renderProjectSelect();
  fillProjectForm(project);
  renderExport();
});

$("delete-project-btn").addEventListener("click", () => {
  if (!activeProjectId) return;
  projects = projects.filter((project) => String(project.id) !== String(activeProjectId));
  writeJson(STORAGE_KEYS.projects, projects);
  renderProjectSelect();
  fillProjectForm(projects[0]);
  renderExport();
});

$("export-btn").addEventListener("click", renderExport);

$("reset-btn").addEventListener("click", () => {
  if (!confirm("Reset all admin edits stored in this browser?")) return;
  localStorage.removeItem(STORAGE_KEYS.profile);
  localStorage.removeItem(STORAGE_KEYS.homepage);
  localStorage.removeItem(STORAGE_KEYS.projects);
  localStorage.removeItem(STORAGE_KEYS.blogs);
  profile = { ...DEFAULT_PROFILE };
  homepage = { ...DEFAULT_HOMEPAGE };
  projects = [...DEFAULT_PROJECTS];
  blogs = [...DEFAULT_BLOGS];
  hydrateDashboard();
  notify("Local admin edits were reset.");
});

setLoggedIn(sessionStorage.getItem("portfolio.admin.loggedIn") === "true");
