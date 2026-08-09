/* ---------------------------------------------------------------
   DATA — Edit this to add/update projects and blog posts
--------------------------------------------------------------- */
const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "Nobel Prize Winners Analysis",
    description:
      "Analyzed over 100 years of Nobel Prize data using Python, Pandas, and Seaborn to uncover trends in U.S. Nobel Prize winners. Created insightful visualizations and published a comprehensive report.",
    category: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    icon: "🏆",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
    highlights: ["100+ years of data", "Trend analysis", "Published report"],
    github: "https://github.com/AI-0o0",
    demo: "",
  },
  {
    id: 2,
    title: "FIFA Player Value Prediction",
    description:
      "End-to-end ML pipeline to predict FIFA player market values and classify performance levels. Applied feature engineering, log transformation, GridSearchCV, and ensemble learning.",
    category: "Machine Learning",
    difficulty: "Advanced",
    status: "Completed",
    icon: "⚽",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "GridSearchCV",
      "Ensemble Learning",
    ],
    highlights: ["96.0% R²", "85.6% accuracy", "End-to-end pipeline"],
    github: "https://github.com/AI-0o0",
    demo: "",
  },
  {
    id: 3,
    title: "House Price Prediction",
    description:
      "Led a 10-member team to predict house prices using the Ames Housing dataset (1,460 properties, 81 features). Implemented linear regression from scratch using NumPy — including Gradient Descent, Normal Equation, and L1/L2 regularization.",
    category: "Machine Learning",
    difficulty: "Intermediate",
    status: "Completed",
    icon: "🏠",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    highlights: [
      "Team lead (10 members)",
      "0.85 R²",
      "From-scratch implementation",
    ],
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
      "A beginner-friendly walkthrough of the ML workflow — from data preprocessing to model evaluation — using real-world examples in Python.",
    link: "blog-post-1.html",
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

const STORAGE_KEYS = {
  profile: "portfolio.profile",
  projects: "portfolio.projects",
  blogs: "portfolio.blogs",
  homepage: "portfolio.homepage",
};

let REMOTE_DATA = null;

function getRemoteSection(key) {
  return REMOTE_DATA ? REMOTE_DATA[key] : null;
}

async function loadRemoteData() {
  try {
    const response = await fetch("data.json", { cache: "no-cache" });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}

const DEFAULT_PROFILE = {
  name: "Abdelrahman Eslam Omar",
  rolePrefix: "Data Science student at Alexandria University",
  heroBio:
    "Data Science student at <strong>Alexandria University</strong> building ML pipelines, uncovering insights from data, and learning something new every day. Currently seeking <strong>internships</strong> and hands-on AI projects.",
  aboutHtml:
    '<p>I\'m <strong>Abdelrahman Eslam Omar</strong>, a first-year Data Science student at <strong>Alexandria University</strong> (Class of 2028) with a real passion for turning messy data into meaningful insights.</p><p>I\'ve built ML pipelines that achieved <strong>96% R2</strong> on regression tasks, led a 10-member team project, and completed practical training in data analysis.</p><p>I\'m currently focused on strengthening my machine learning foundations, learning deep learning, and building a portfolio that shows clear, practical problem-solving.</p><div class="about-tags"><span class="badge badge-blue">Open to Internships</span><span class="badge badge-green">Open to Research</span><span class="badge badge-gray">Remote-Friendly</span></div>',
  email: "abdelrahmaneslamomar@gmail.com",
  footerText: "Built with love and Python by Abdelrahman Eslam",
};

const DEFAULT_HOMEPAGE = {
  stats: [
    { value: "3", label: "Projects" },
    { value: "3.5", label: "GPA" },
    { value: "'28", label: "Graduation" },
  ],
  skills: [
    {
      title: "Programming",
      color: "var(--accent)",
      items: ["Python", "SQL"],
    },
    {
      title: "Data Science",
      color: "#0891b2",
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA"],
    },
    {
      title: "Machine Learning",
      color: "#7c3aed",
      items: [
        "Scikit-learn",
        "Regression",
        "Classification",
        "Feature Engineering",
      ],
    },
    {
      title: "Tools & Workflow",
      color: "#059669",
      items: ["Jupyter Notebook", "Google Colab", "Git", "GitHub"],
    },
    {
      title: "Soft Skills",
      color: "#d97706",
      items: [
        "Problem Solving",
        "Communication",
        "Critical Thinking",
        "Research",
        "Teamwork",
      ],
    },
    {
      title: "Mathematics",
      color: "#db2777",
      items: ["Linear Algebra", "Statistics", "Probability", "Calculus"],
    },
  ],
  learning: [
    "Deep Learning",
    "Neural Networks",
    "PyTorch",
    "NLP Fundamentals",
    "TensorFlow",
  ],
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
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/AI-0o0",
      href: "https://github.com/AI-0o0",
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "linkedin.com/in/abdelrahmaneslam",
      href: "https://linkedin.com/in/abdelrahmaneslam",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+20 127 992 9056",
      href: "tel:+201279929056",
    },
    { icon: "📍", label: "Location", value: "Alexandria, Egypt", href: "" },
  ],
};

function readStoredJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn(`Could not read ${key} from localStorage`, error);
    return fallback;
  }
}

let PROJECTS = readStoredJson(
  STORAGE_KEYS.projects,
  getRemoteSection("projects") || DEFAULT_PROJECTS
);
let BLOGS = readStoredJson(
  STORAGE_KEYS.blogs,
  getRemoteSection("blogs") || DEFAULT_BLOGS
);

function getProfile() {
  const baseProfile = getRemoteSection("profile") || DEFAULT_PROFILE;
  return {
    ...baseProfile,
    ...readStoredJson(STORAGE_KEYS.profile, {}),
  };
}

window.PORTFOLIO_DEFAULTS = {
  STORAGE_KEYS,
  profile: DEFAULT_PROFILE,
  projects: DEFAULT_PROJECTS,
  blogs: DEFAULT_BLOGS,
  homepage: DEFAULT_HOMEPAGE,
};

function getHomepage() {
  const baseHomepage = getRemoteSection("homepage") || DEFAULT_HOMEPAGE;
  return {
    ...baseHomepage,
    ...readStoredJson(STORAGE_KEYS.homepage, {}),
  };
}

function tagList(items, className = "skill-tag") {
  return (items || [])
    .map((item) => `<span class="${className}">${item}</span>`)
    .join("");
}

function renderTimeline(items, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.innerHTML = (items || [])
    .map(
      (item) => `
          <div class="timeline-item">
            <div class="timeline-left">
              <div class="timeline-dot ${item.colorClass || "blue"}">${
        item.icon || ""
      }</div>
              <div class="timeline-line"></div>
            </div>
            <div class="card timeline-card">
              <div class="timeline-meta">
                <div>
                  <div class="timeline-title">${item.title || ""}</div>
                  <div class="timeline-sub">${item.subtitle || ""}</div>
                </div>
                <span class="timeline-period">${item.period || ""}</span>
              </div>
              ${
                item.badges?.length
                  ? `<div style="margin-bottom: 12px">${item.badges
                      .map(
                        (badge) =>
                          `<span class="badge badge-gray" style="margin-right: 6px">${badge}</span>`
                      )
                      .join("")}</div>`
                  : ""
              }
              <ul class="timeline-list">
                ${(item.bullets || [])
                  .map((bullet) => `<li>${bullet}</li>`)
                  .join("")}
              </ul>
            </div>
          </div>`
    )
    .join("");
}

function applyHomepage() {
  const homepage = getHomepage();
  const stats = document.querySelector(".hero-stats");
  const skills = document.querySelector(".skills-grid");
  const learning = document.querySelector(".skills-learning .skill-tags");
  const research = document.querySelector(".research-grid");
  const contactIntro = document.querySelector(".contact-info > p");
  const contactItems = document.querySelector(".contact-items");

  if (stats) {
    stats.innerHTML = (homepage.stats || [])
      .map(
        (stat) =>
          `<div><div class="stat-val">${stat.value}</div><div class="stat-label">${stat.label}</div></div>`
      )
      .join("");
  }

  if (skills) {
    skills.innerHTML = (homepage.skills || [])
      .map(
        (group) => `
            <div class="card skill-group">
              <p class="skill-group-title" style="color: ${
                group.color || "var(--accent)"
              }">${group.title}</p>
              <div class="skill-tags">${tagList(group.items)}</div>
            </div>`
      )
      .join("");
  }

  if (learning) learning.innerHTML = tagList(homepage.learning);
  renderTimeline(homepage.education, "#education .timeline");
  renderTimeline(homepage.experience, "#experience .timeline");

  if (research) {
    research.innerHTML = (homepage.research || [])
      .map(
        (item) => `
            <div class="card research-card">
              <div class="research-card-top">
                <span class="research-emoji">${item.emoji || ""}</span>
                <span class="badge ${item.badgeClass || "badge-gray"}">${
          item.badge || ""
        }</span>
              </div>
              <h3>${item.title || ""}</h3>
              <p>${item.text || ""}</p>
            </div>`
      )
      .join("");
  }

  if (contactIntro) contactIntro.textContent = homepage.contactIntro || "";
  if (contactItems) {
    contactItems.innerHTML = (homepage.contactItems || [])
      .map((item) => {
        const value = item.href
          ? `<a href="${item.href}" class="contact-item-val">${
              item.value || ""
            }</a>`
          : `<span class="contact-item-val">${item.value || ""}</span>`;
        return `
              <div class="contact-item">
                <div class="contact-item-icon">${item.icon || ""}</div>
                <div>
                  <div class="contact-item-label">${item.label || ""}</div>
                  ${value}
                </div>
              </div>`;
      })
      .join("");
  }
}

function applyProfile() {
  const profile = getProfile();
  const heroName = document.querySelector(".hero-name");
  const heroBio = document.querySelector(".hero-bio");
  const aboutText = document.querySelector(".about-text");
  const footerBottom = document.querySelector(".footer-bottom");

  if (heroName) {
    const words = profile.name.trim().split(/\s+/);
    heroName.innerHTML =
      words.length > 2
        ? `${words.slice(0, 2).join(" ")}<br />${words.slice(2).join(" ")}`
        : profile.name;
  }

  if (heroBio) heroBio.innerHTML = profile.heroBio;
  if (aboutText) aboutText.innerHTML = profile.aboutHtml;
  if (footerBottom) {
    footerBottom.innerHTML = `${profile.footerText} © <span id="year"></span>`;
  }

  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.href = `mailto:${profile.email}`;
    if (link.textContent.includes("@")) link.textContent = profile.email;
  });
}

/* ---------------------------------------------------------------
   DARK MODE
--------------------------------------------------------------- */
const html = document.documentElement;
const themeBtn = document.getElementById("theme-btn");

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = saved ? saved === "dark" : prefersDark;
  html.setAttribute("data-theme", isDark ? "dark" : "light");
  themeBtn.textContent = isDark ? "☀️" : "🌙";
}

themeBtn.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";
  const next = isDark ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
});

initTheme();

/* ---------------------------------------------------------------
   NAV SCROLL + ACTIVE LINKS
--------------------------------------------------------------- */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

/* ---------------------------------------------------------------
   SCROLL PROGRESS BAR
--------------------------------------------------------------- */
const progressBar = document.getElementById("scroll-progress");
function updateProgress() {
  const max =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((l) => {
          l.classList.toggle(
            "active",
            l.getAttribute("href") === "#" + e.target.id
          );
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => observer.observe(s));

/* ---------------------------------------------------------------
   MOBILE MENU
--------------------------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
}

/* ---------------------------------------------------------------
   FOOTER YEAR
--------------------------------------------------------------- */
applyProfile();
applyHomepage();
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------------------------------------------------------
   PROJECTS RENDERING
--------------------------------------------------------------- */
const DIFF_BADGE = {
  Beginner: "badge-green",
  Intermediate: "badge-amber",
  Advanced: "badge-red",
};
const STATUS_BADGE = {
  Completed: "badge-green",
  "In Progress": "badge-blue",
  Planned: "badge-gray",
};

let projectCat = "All";

function renderProjects() {
  const search = document.getElementById("project-search").value.toLowerCase();
  const grid = document.getElementById("projects-grid");
  const filtered = PROJECTS.filter((p) => {
    const matchCat = projectCat === "All" || p.category === projectCat;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search) ||
      p.technologies.some((t) => t.toLowerCase().includes(search));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="no-results">No projects match your search.</div>';
    return;
  }

  grid.innerHTML = filtered
    .map(
      (p) => `
    <div class="card project-card">
      <div class="project-card-accent"></div>
      <div class="project-card-body">
        <div class="project-card-top">
          <div class="project-icon">${p.icon}</div>
          <div class="project-badges">
            <span class="badge ${DIFF_BADGE[p.difficulty] || "badge-gray"}">${
        p.difficulty
      }</span>
            <span class="badge ${STATUS_BADGE[p.status] || "badge-gray"}">${
        p.status
      }</span>
          </div>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        ${
          p.highlights && p.highlights.length
            ? `
          <div class="project-highlights">
            ${p.highlights
              .map((h) => `<span class="project-highlight">${h}</span>`)
              .join("")}
          </div>`
            : ""
        }
        <div class="project-tech">
          ${p.technologies.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
        <div class="project-links">
          ${
            p.github
              ? `<a href="${p.github}" target="_blank" rel="noopener" class="project-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            Code
          </a>`
              : ""
          }
          ${
            p.demo
              ? `<a href="${p.demo}" target="_blank" rel="noopener" class="project-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>`
              : ""
          }
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

function setProjectFilter(btn) {
  document
    .querySelectorAll("#project-filters .filter-pill")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  projectCat = btn.dataset.cat;
  renderProjects();
}

function filterProjects() {
  renderProjects();
}

renderProjects();

/* ---------------------------------------------------------------
   BLOG RENDERING
--------------------------------------------------------------- */
const CAT_BADGE_CLASS = {
  "Machine Learning": "badge-blue",
  "Data Science": "badge-green",
  "Deep Learning": "badge-amber",
  NLP: "badge-red",
  Career: "badge-gray",
};

let blogCat = "All";

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
  const allBlogs = [...BLOGS].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const filtered = allBlogs
    .filter((b) => {
      const matchCat = blogCat === "All" || b.category === blogCat;
      const matchSearch =
        !search ||
        b.title.toLowerCase().includes(search) ||
        b.summary.toLowerCase().includes(search) ||
        b.tags.some((t) => t.toLowerCase().includes(search));
      return matchCat && matchSearch;
    })
    .slice(0, BLOGS.length > 2 ? 2 : BLOGS.length);

  document.querySelectorAll(".all-blogs-link").forEach((link) => {
    link.classList.toggle("hidden", BLOGS.length <= 2);
  });

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="no-results" style="grid-column:1/-1">No articles match your search.</div>';
    return;
  }

  grid.innerHTML = filtered
    .map(
      (b) => `
    <article class="card blog-card">
      <div class="blog-card-body">
        <div class="blog-card-top">
          <span class="badge ${CAT_BADGE_CLASS[b.category] || "badge-gray"}">${
        b.category
      }</span>
          <span class="blog-date">${formatDate(b.date)}</span>
        </div>
        <h3 class="blog-title">${b.title}</h3>
        <p class="blog-summary">${b.summary}</p>
        <div class="blog-tags">
          ${b.tags.map((t) => `<span class="tag"># ${t}</span>`).join("")}
        </div>
        <div class="blog-footer">
          <span class="reading-time">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
            ${b.readingTime}
          </span>
          <a href="${b.link}" class="read-more">
            Read more
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </a>
        </div>
      </div>
    </article>
  `
    )
    .join("");

  if (BLOGS.length > 2) {
    grid.insertAdjacentHTML(
      "beforeend",
      `
      <article class="card blog-card blog-more-card">
        <div class="blog-card-body">
          <div class="blog-card-top">
            <span class="badge badge-blue">More Writing</span>
            <span class="blog-date">${BLOGS.length} posts</span>
          </div>
          <h3 class="blog-title">Explore all blog posts</h3>
          <p class="blog-summary">
            Browse the full archive of notes, project lessons, and practical ideas about data science, ML, and AI.
          </p>
          <div class="blog-tags">
            <span class="tag"># Archive</span>
            <span class="tag"># Learning</span>
          </div>
          <div class="blog-footer">
            <span class="reading-time">All articles</span>
            <a href="blogs.html" class="read-more">
              View all
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </a>
          </div>
        </div>
      </article>`
    );
  }
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

renderBlogs();

/* ---------------------------------------------------------------
   CONTACT FORM
--------------------------------------------------------------- */
function submitContact(e) {
  e.preventDefault();
  const name = document.getElementById("c-name").value;
  const email = document.getElementById("c-email").value;
  const subject =
    document.getElementById("c-subject").value || "Portfolio Contact";
  const message = document.getElementById("c-message").value;
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  window.location.href = `mailto:${
    getProfile().email
  }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const btn = document.getElementById("submit-btn");
  btn.innerHTML = "✓ Message prepared — check your email client!";
  btn.style.background = "var(--green)";
  setTimeout(() => {
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9 22,2"/></svg> Send Message';
    btn.style.background = "";
  }, 5000);
}

/* ---------------------------------------------------------------
   SCROLL REVEAL (simple version)
--------------------------------------------------------------- */
const revealEls = document.querySelectorAll(
  ".card, .timeline-item, .section-head"
);
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
const revealObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "translateY(0)";
        revealObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);

if (!prefersReducedMotion) {
  revealEls.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    revealObs.observe(el);
  });
}

async function refreshFromRemoteData() {
  const data = await loadRemoteData();
  if (!data) return;
  REMOTE_DATA = data;
  PROJECTS = readStoredJson(
    STORAGE_KEYS.projects,
    data.projects || DEFAULT_PROJECTS
  );
  BLOGS = readStoredJson(STORAGE_KEYS.blogs, data.blogs || DEFAULT_BLOGS);
  applyProfile();
  applyHomepage();
  renderProjects();
  renderBlogs();
}

refreshFromRemoteData();
