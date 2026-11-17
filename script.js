/* ============================================================
   ABDELRAHMAN ESLAM — PORTFOLIO CLIENT JAVASCRIPT
   Modern UI/UX Pro Max Architecture
   Data Source: data.json (with LocalStorage override fallback)
   ============================================================ */

/* ---------------------------------------------------------------
   1. DEFAULT DATA FALLBACKS (DO NOT EDIT DIRECTLY; USE data.json)
--------------------------------------------------------------- */
const DEFAULT_PROFILE = {
  name: "Abdelrahman Eslam Omar",
  heroBio:
    "Computer & Data Science student at <strong>Alexandria University</strong> building <strong>AI agents, LLM applications, and RAG systems</strong>. Interested in <strong>AI research</strong>, particularly agentic AI, LLMs, and intelligent systems. Currently seeking <strong>AI/ML internships</strong> and research opportunities.",
  aboutHtml:
    "<p>I'm <strong>Abdelrahman Eslam Omar</strong>, a Computer & Data Science student at <strong>Alexandria University</strong> with a strong interest in <strong>AI research and intelligent systems</strong>.</p>\n\n<p>I enjoy building <strong>AI agents, LLM applications, and RAG systems</strong>, while exploring how models, tools, memory, and retrieval can work together to create reliable AI systems.</p>",
  email: "abdelrahmaneslamomar@gmail.com",
  footerText: "Built by Abdelrahman Eslam",
};

const DEFAULT_HOMEPAGE = {
  stats: [
    { value: "20+", label: "Projects" },
    { value: "3.45", label: "GPA" },
    { value: "'28", label: "Graduation" },
  ],
  skills: [
    {
      title: "Programming",
      color: "var(--accent)",
      items: ["Python", "SQL", "C++", "JavaScript"],
    },
    {
      title: "AI & LLMs",
      color: "#7c3aed",
      items: ["LLMs", "AI Agents", "RAG", "LangChain", "MCP", "Prompt Engineering"],
    },
    {
      title: "Machine Learning",
      color: "#0891b2",
      items: ["Scikit-learn", "PyTorch", "Deep Learning", "NLP", "Feature Engineering"],
    },
    {
      title: "Backend & Systems",
      color: "#059669",
      items: ["FastAPI", "Node.js", "REST APIs", "Pydantic", "Async Python"],
    },
    {
      title: "Data",
      color: "#d97706",
      items: ["Pandas", "NumPy", "MySQL", "EDA", "Data Visualization"],
    },
    {
      title: "Engineering",
      color: "#db2777",
      items: ["Git", "GitHub", "Linux", "Testing", "System Design"],
    },
  ],
  learning: [
    "AI Agents",
    "LLM Applications",
    "RAG Systems",
    "MCP",
    "AI System Design",
    "LLM Evaluation",
  ],
  education: [
    {
      icon: "graduation",
      colorClass: "blue",
      title: "Alexandria University",
      subtitle: "BSc in Data Science",
      period: "Sep 2024 - Jun 2028",
      badges: ["GPA 3.45 / 4.0", "Alexandria, Egypt"],
      bullets: [
        "Focusing on machine learning, statistics, and data engineering",
        "Active in AI-related student communities on campus",
        "Maintaining strong academic performance from day one",
      ],
    },
  ],
  experience: [
    {
      icon: "brain",
      colorClass: "purple",
      title: "NLP Trainee",
      subtitle: "NTI NLP Training",
      period: "Jul 2026 - Present",
      badges: ["NLP", "Deep Learning"],
      bullets: [
        "Developing practical skills in Natural Language Processing and modern NLP techniques",
        "Working with text processing, language models, and NLP applications",
      ],
    },
    {
      icon: "cpu",
      colorClass: "cyan",
      title: "Autonomous Agents Trainee",
      subtitle: "Alexandria University",
      period: "Jul 2026 - Present",
      badges: ["AI Agents", "LLMs"],
      bullets: [
        "Exploring autonomous agent architectures and LLM-based systems",
        "Building practical experience with agent workflows, tools, and decision-making",
      ],
    },
    {
      icon: "briefcase",
      colorClass: "green",
      title: "Data Analyst Trainee",
      subtitle: "Skills Dynamics (DEPI)",
      period: "May 2025 - Oct 2025",
      badges: [],
      bullets: [
        "Completed hands-on projects in data analysis using Python and SQL",
        "Cleaned, analyzed, and visualized datasets with thousands of records",
      ],
    },
  ],
  research: [
    {
      icon: "message",
      badge: "Exploring",
      badgeClass: "badge-blue",
      title: "Natural Language Processing",
      text: "Understanding how machines process, interpret, and generate human language.",
    },
    {
      icon: "cpu",
      badge: "Learning",
      badgeClass: "badge-blue",
      title: "Large Language Models",
      text: "Studying foundation model architecture, prompting, and efficient inference.",
    },
    {
      icon: "brain",
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
      icon: "mail",
      label: "Email",
      value: "abdelrahmaneslamomar@gmail.com",
      href: "mailto:abdelrahmaneslamomar@gmail.com",
    },
    {
      icon: "github",
      label: "GitHub",
      value: "github.com/AI-0o0",
      href: "https://github.com/AI-0o0",
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/abdelrahmaneslam",
      href: "https://linkedin.com/in/abdelrahmaneslam",
    },
    {
      icon: "phone",
      label: "Phone",
      value: "+20 127 992 9056",
      href: "tel:+201279929056",
    },
    {
      icon: "map-pin",
      label: "Location",
      value: "Alexandria, Egypt",
      href: "",
    },
  ],
};

const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "WanderPath Travel Agency MCP & AI Agent",
    description:
      "Secure Model Context Protocol (MCP) server and autonomous ReAct agent architecture for enterprise travel operations, implementing role-based authorization and human-in-the-loop confirmation.",
    category: "AI Agents",
    difficulty: "Advanced",
    status: "Completed",
    icon: "MCP",
    technologies: ["Python", "MCP Protocol", "FastMCP", "ReAct Agent", "MySQL", "Tool Calling"],
    highlights: ["Collaborative Project", "Role-Based Authorization", "Human-in-the-Loop Elicitation"],
    github: "https://github.com/AI-0o0/WanderPathA",
    demo: "",
  },
  {
    id: 2,
    title: "Excel MCP Server",
    description:
      "An intelligent Model Context Protocol (MCP) server enabling AI assistants (Claude, Cursor, Copilot) to inspect, query, edit, and format Excel workbooks asynchronously.",
    category: "AI Agents",
    difficulty: "Advanced",
    status: "In Progress",
    icon: "MCP",
    technologies: ["Python", "MCP Protocol", "FastMCP", "AsyncIO", "OpenPyXL", "Pandas"],
    highlights: ["Full MCP Tool Protocol", "Autonomous Spreadsheet Workflows", "Zero-Latency Async Execution"],
    github: "https://github.com/AI-0o0/excel-mcp",
    demo: "",
  },
  {
    id: 3,
    title: "FIFA Player Market Value ML Pipeline",
    description:
      "End-to-end Machine Learning pipeline achieving 96% R² score predicting football player valuations with automated domain feature engineering and cross-validated models.",
    category: "Machine Learning",
    difficulty: "Advanced",
    status: "Completed",
    icon: "ML",
    technologies: ["Python", "Scikit-learn", "Pandas", "GridSearchCV", "Feature Engineering"],
    highlights: ["96.0% R² Score", "85.6% Tier Accuracy", "Automated ML Pipeline"],
    github: "https://github.com/AI-0o0/Data-science-projects",
    demo: "",
  },
  {
    id: 4,
    title: "Linear Regression Analysis From Scratch",
    description:
      "NumPy implementation of Linear Regression built from scratch, benchmarking Gradient Descent vs. Closed-Form Normal Equation with L1/L2 regularization across multiple model specifications.",
    category: "Machine Learning",
    difficulty: "Intermediate",
    status: "Completed",
    icon: "MATH",
    technologies: ["Python", "NumPy", "Matplotlib", "Seaborn", "Vectorization", "Linear Algebra"],
    highlights: ["Vectorized Gradient Descent", "Closed-Form Normal Equation", "L1 / L2 Regularization"],
    github: "https://github.com/AI-0o0/Regression-Analysis-project-",
    demo: "",
  },
  {
    id: 5,
    title: "Greenfield MCP Agent Dispatcher",
    description:
      "Autonomous AI agent dispatcher framework using the Model Context Protocol to orchestrate multi-tool workflows, dispatch microservices, and maintain state.",
    category: "AI Agents",
    difficulty: "Advanced",
    status: "In Progress",
    icon: "AI",
    technologies: ["Python", "FastMCP", "AI Agents", "AsyncIO", "Tool Dispatch"],
    highlights: ["Autonomous Tool Dispatching", "Multi-Tool Orchestration", "Resilient Task Routing"],
    github: "https://github.com/AI-0o0/greenfieldA",
    demo: "",
  },
  {
    id: 6,
    title: "End-to-End Data Science Methodology",
    description:
      "Final project for Data Science Methodology at Alexandria University showcasing a complete CRISP-DM pipeline: raw data ingestion, statistical EDA, hypothesis testing, and actionable insight synthesis.",
    category: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    icon: "DS",
    technologies: ["Python", "Pandas", "Scikit-learn", "Statistical Modeling", "Seaborn", "EDA"],
    highlights: ["CRISP-DM Standard Pipeline", "Hypothesis Testing Validation", "Insight Formulation"],
    github: "https://github.com/AI-0o0/AlexU_DSM_FinalProject",
    demo: "",
  },
  {
    id: 7,
    title: "FCDS Data Mining & Pattern Discovery",
    description:
      "Advanced data mining pipeline applying unsupervised clustering (K-Means, Hierarchical), Association Rule Mining (Apriori), and PCA dimensionality reduction on complex datasets.",
    category: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    icon: "DM",
    technologies: ["Python", "Scikit-learn", "Apriori / FP-Growth", "K-Means", "PCA", "Pandas"],
    highlights: ["Unsupervised Clustering", "Association Rule Mining", "PCA Dimensionality Reduction"],
    github: "https://github.com/AI-0o0/Data-Mining-FCDS-Project-",
    demo: "",
  },
  {
    id: 8,
    title: "DEPI Strategic Data Analytics & Insights",
    description:
      "Graduation data analytics project for Digital Egypt Pioneers Initiative (DEPI) extracting strategic KPI trends, predictive performance indicators, and automated visual dashboards.",
    category: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    icon: "VIZ",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Visualization", "SQL"],
    highlights: ["DEPI Graduation Project", "Strategic KPI Dashboards", "Statistical Trend Decomposition"],
    github: "https://github.com/AI-0o0/DEPI-Final-Project",
    demo: "",
  },
  {
    id: 9,
    title: "Nobel Prize 100-Year Historical Analysis",
    description:
      "Exploratory data analysis and historical trend modeling spanning over a century of Nobel Prize laureates, gender dynamics, and geographical distributions.",
    category: "Data Science",
    difficulty: "Intermediate",
    status: "Completed",
    icon: "DS",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter", "EDA"],
    highlights: ["100+ Years of Data", "Demographic Trend Analysis", "Data-Driven Visualizations"],
    github: "https://github.com/AI-0o0/Data-science-projects",
    demo: "",
  },
];

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
    link: "working-with-coding-agents.html",
  },
];

/* ---------------------------------------------------------------
   2. STORAGE & REMOTE DATA SYNC
--------------------------------------------------------------- */
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

function readStoredJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    if (!value) return fallback;
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed) && parsed.length === 0 && Array.isArray(fallback) && fallback.length > 0) {
      return fallback;
    }
    return parsed;
  } catch (error) {
    console.warn(`Could not read ${key} from localStorage`, error);
    return fallback;
  }
}

let PROJECTS = readStoredJson(STORAGE_KEYS.projects, DEFAULT_PROJECTS);
let BLOGS = readStoredJson(STORAGE_KEYS.blogs, DEFAULT_BLOGS);

function getProfile() {
  const baseProfile = getRemoteSection("profile") || DEFAULT_PROFILE;
  return {
    ...baseProfile,
    ...readStoredJson(STORAGE_KEYS.profile, {}),
  };
}

function getHomepage() {
  const baseHomepage = getRemoteSection("homepage") || DEFAULT_HOMEPAGE;
  return {
    ...baseHomepage,
    ...readStoredJson(STORAGE_KEYS.homepage, {}),
  };
}

window.PORTFOLIO_DEFAULTS = {
  STORAGE_KEYS,
  profile: DEFAULT_PROFILE,
  projects: DEFAULT_PROJECTS,
  blogs: DEFAULT_BLOGS,
  homepage: DEFAULT_HOMEPAGE,
};

/* ---------------------------------------------------------------
   3. SVG ICON MAP (NO EMOJIS)
--------------------------------------------------------------- */
function getSvgIcon(name) {
  switch (name) {
    case "graduation":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`;
    case "briefcase":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`;
    case "brain":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`;
    case "cpu":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
    case "message":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`;
    case "data":
    case "chart":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`;
    case "ml":
    case "code":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    case "mail":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`;
    case "github":
      return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;
    case "linkedin":
      return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
    case "phone":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
    case "map-pin":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`;
  }
}

/* ---------------------------------------------------------------
   4. THEME CONTROLLER (LIGHT / DARK)
--------------------------------------------------------------- */
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

/* ---------------------------------------------------------------
   5. NAVIGATION SCROLL & ACTIVE SPY
--------------------------------------------------------------- */
const nav = document.getElementById("nav");
const progressBar = document.getElementById("scroll-progress");
const backTop = document.getElementById("back-top");

function updateNavOnScroll() {
  const scrollY = window.scrollY;
  if (nav) nav.classList.toggle("scrolled", scrollY > 20);
  if (backTop) backTop.classList.toggle("visible", scrollY > 450);

  if (progressBar) {
    const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progressBar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  }
}

window.addEventListener("scroll", updateNavOnScroll, { passive: true });
updateNavOnScroll();

const navDesktopLinks = document.querySelectorAll("#nav-desktop-links a");
const sections = document.querySelectorAll("section[id]");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navDesktopLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach((sec) => navObserver.observe(sec));

/* ---------------------------------------------------------------
   6. MOBILE MENU
--------------------------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

function setMobileMenuState(isOpen) {
  if (!mobileMenu || !hamburger) return;

  mobileMenu.classList.toggle("open", isOpen);
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
}

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    setMobileMenuState(!mobileMenu.classList.contains("open"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
      setMobileMenuState(false);
      hamburger.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && mobileMenu.classList.contains("open")) {
      setMobileMenuState(false);
    }
  });
}

function closeMobileMenu() {
  setMobileMenuState(false);
}
window.closeMobileMenu = closeMobileMenu;

/* ---------------------------------------------------------------
   7. TOAST NOTIFICATION & CLIPBOARD
--------------------------------------------------------------- */
let toastTimeout = null;

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.textContent = message || "Copied to clipboard";
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

function copyTextToClipboard(text, successMsg = "Copied to clipboard") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
  }).catch(() => {
    // Fallback for older browsers
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast(successMsg);
  });
}

function copyEmailToClipboard() {
  const profile = getProfile();
  copyTextToClipboard(profile.email || "abdelrahmaneslamomar@gmail.com", "Email copied: " + profile.email);
}

/* ---------------------------------------------------------------
   8. MASCOT ORB — LIVE POINTER-REACTIVE COMPANION
   Particle model: Codrops "Interactive Particles" concept —
   anchored particles, pointer repulsion, spring return, friction.
   Behaviors: cursor follow (desktop), gaze tracking, idle wander,
   blinking, scroll glance, tap/click "boop" burst, FLIP dock morph.
--------------------------------------------------------------- */
(function initMascotOrb() {
  const wrap = document.getElementById("mascot-wrap");
  const stage = document.getElementById("mascot-stage");
  const orbPos = document.getElementById("mascot-orb-pos");
  const orb = document.getElementById("mascot-orb");
  const canvas = document.getElementById("mascot-canvas");
  if (!wrap || !stage || !orbPos || !orb || !canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const TAU = Math.PI * 2;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const rand = (min, max) => min + Math.random() * (max - min);

  /* ---------- state ---------- */
  let stageW = 0;
  let stageH = 0;
  let docked = false;
  let running = false;
  let rafId = 0;
  let flipAnim = null;
  let curious = false;
  let boopUntil = 0;
  let blinkUntil = 0;
  let nextBlink = performance.now() + 1800 + Math.random() * 2200;
  let wanderT = Math.random() * 100;
  let lastScrollY = window.scrollY;
  let scrollBias = 0;
  let scrollBiasUntil = 0;
  let lastFrameTime = performance.now();
  let heroDocTop = 0; // mascot wrap's position in document coordinates

  function measureHeroDocTop() {
    heroDocTop = wrap.getBoundingClientRect().top + window.scrollY;
  }
  measureHeroDocTop();
  window.addEventListener("resize", measureHeroDocTop);

  const pointer = { x: -9999, y: -9999, inside: false, fine: true, lastMove: 0 };
  const follow = { x: 0, y: 0 };
  const gaze = { x: 0, y: 0 };

  /* ---------- particles ---------- */
  const specks = [];  // subtle texture on the orb face
  const halo = [];    // dust ring drifting around the orb
  const sparks = [];  // short-lived burst particles
  const palette = { onOrb: "236,240,247", halo: "148,163,184" };

  function readPalette() {
    const dark = document.documentElement.getAttribute("data-theme") === "dark";
    palette.onOrb = dark ? "235,240,248" : "240,238,230";
    palette.halo = dark ? "196,210,232" : "71,85,105";
  }
  readPalette();
  if (typeof MutationObserver !== "undefined") {
    new MutationObserver(readPalette).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
  }

  function makeSpeck() {
    const angle = Math.random() * TAU;
    const radius = Math.sqrt(Math.random()) * 10;
    return {
      ax: 0.5 + Math.cos(angle) * radius,
      ay: 0.5 + Math.sin(angle) * radius,
      x: 0, y: 0, vx: 0, vy: 0,
      r: rand(0.003, 0.006),
      a: rand(0.05, 0.15),
      phase: Math.random() * TAU,
      speed: rand(0.8, 0.9),
      amp: rand(0.004, 0.011),
      spring: rand(0.01, 0.022),
    };
  }

  function makeHalo() {
    const angle = Math.random() * TAU;
    const radius = rand(0.33, 0.52);
    return {
      ax: 0.5 + Math.cos(angle) * radius,
      ay: 0.5 + Math.sin(angle) * radius,
      x: 0, y: 0, vx: 0, vy: 0,
      r: rand(0.0022, 0.0042),
      a: rand(0.12, 0.3),
      phase: Math.random() * TAU,
      speed: rand(0.3, 0.9),
      amp: rand(0.006, 0.018),
      spring: rand(0.007, 0.015),
    };
  }

  function seedParticles() {
    specks.length = 0;
    halo.length = 0;
    const scale = clamp(stageW / 420, 0.12, 1.2);
    const nSpecks = Math.max(10, Math.round(38 * scale));
    const nHalo = Math.max(7, Math.round(60 * scale));
    for (let i = 0; i < nSpecks; i++) specks.push(makeSpeck());
    for (let i = 0; i < nHalo; i++) halo.push(makeHalo());
    specks.concat(halo).forEach((p) => {
      p.x = p.ax * stageW;
      p.y = p.ay * stageH;
    });
  }

  function drawParticles() {
    ctx.clearRect(0, 0, stageW, stageH);
    for (let i = 0; i < halo.length; i++) {
      const p = halo[i];
      ctx.fillStyle = "rgba(" + palette.halo + "," + clamp(p.a, 0, 0.55).toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.5, p.r * stageW), 0, TAU);
      ctx.fill();
    }
    for (let i = 0; i < specks.length; i++) {
      const p = specks[i];
      ctx.fillStyle = "rgba(" + palette.onOrb + "," + clamp(p.a + 0.07, 0, 0.5).toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.5, p.r * stageW), 0, TAU);
      ctx.fill();
    }
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      ctx.fillStyle = "rgba(" + palette.onOrb + "," + clamp(s.life * 0.85, 0, 0.9).toFixed(3) + ")";
      ctx.beginPath();
      ctx.arc(s.x, s.y, Math.max(0.6, s.r), 0, TAU);
      ctx.fill();
    }
  }

  function resizeCanvas() {
    stageW = stage.offsetWidth;
    stageH = stage.offsetHeight;
    if (!stageW || !stageH) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(stageW * dpr);
    canvas.height = Math.round(stageH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seedParticles();
    drawParticles();
  }

  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(resizeCanvas).observe(stage);
  } else {
    window.addEventListener("resize", resizeCanvas);
  }
  resizeCanvas();

  /* ---------- pointer & scroll ---------- */
  function onPointerMove(e) {
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    pointer.inside = true;
    pointer.fine = e.pointerType !== "touch";
    pointer.lastMove = performance.now();
  }
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerdown", onPointerMove, { passive: true });
  document.addEventListener("pointerleave", () => { pointer.inside = false; });
  window.addEventListener("blur", () => { pointer.inside = false; });

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const dy = y - lastScrollY;
    lastScrollY = y;
    if (Math.abs(dy) > 3 && !reducedMotion) {
      scrollBias = clamp(dy * 0.09, -26, 26);
      scrollBiasUntil = performance.now() + 280;
    }
  }, { passive: true });

  /* ---------- boop (tap / click / keyboard) ---------- */
  function boop() {
    const now = performance.now();
    if (now < boopUntil) return;
    boopUntil = now + 640;
    orb.classList.remove("boop");
    void orb.offsetWidth; // restart squash animation
    orb.classList.add("boop");
    blinkUntil = now + 150;

    const cx = stageW / 2;
    const cy = stageH / 2;
    const kick = Math.max(2.4, stageW * 0.02);
    specks.concat(halo).forEach((p) => {
      const dx = p.x - cx || rand(-1, 1);
      const dy = p.y - cy || rand(-1, 1);
      const d = Math.hypot(dx, dy) || 1;
      p.vx += (dx / d) * kick * rand(0.7, 1.5);
      p.vy += (dy / d) * kick * rand(0.7, 1.5);
    });
    for (let i = 0; i < 12; i++) {
      const angle = Math.random() * TAU;
      const speed = kick * rand(1.3, 2.8);
      sparks.push({
        x: cx + Math.cos(angle) * stageW * 0.18,
        y: cy + Math.sin(angle) * stageW * 0.18,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        r: Math.max(0.7, stageW * 0.007),
      });
    }
  }
  orb.addEventListener("pointerdown", boop);
  orb.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      boop();
    }
  });

  /* ---------- docking: FLIP morph between hero and fixed corner ---------- */
  function setDocked(next) {
    if (next === docked) return;
    if (flipAnim) {
      flipAnim.cancel();
      flipAnim = null;
    }
    const first = stage.getBoundingClientRect();
    docked = next;
    wrap.classList.toggle("docked", next);
    document.body.classList.toggle("mascot-docked", next);

    if (reducedMotion) return;

    const last = stage.getBoundingClientRect();
    const dx = first.left - last.left;
    const dy = first.top - last.top;
    const sx = first.width / Math.max(last.width, 1);
    const sy = first.height / Math.max(last.height, 1);
    flipAnim = stage.animate(
      [
        { transform: "translate(" + dx + "px, " + dy + "px) scale(" + sx + ", " + sy + ")" },
        { transform: "translate(0, 0) scale(1, 1)" },
      ],
      { duration: 620, easing: "cubic-bezier(0.3, 1, 0.36, 1)" }
    );
    flipAnim.onfinish = () => {
      flipAnim = null;
      stage.style.transform = "";
    };
  }

  /* ---------- particle physics (Codrops interactive particles) ---------- */
  function stepParticle(p, dt, px, py, repelRadius, repelRadius2, forceK, t) {
    // gentle ambient drift around the anchor
    const ax = p.ax * stageW + Math.cos(t * p.speed + p.phase) * p.amp * stageW;
    const ay = p.ay * stageH + Math.sin(t * p.speed * 0.9 + p.phase) * p.amp * stageW;
    // spring back to anchor
    p.vx += (ax - p.x) * p.spring * dt;
    p.vy += (ay - p.y) * p.spring * dt;
    // pointer repulsion
    const dx = p.x - px;
    const dy = p.y - py;
    const d2 = dx * dx + dy * dy;
    if (d2 < repelRadius2 && d2 > 0.01) {
      const d = Math.sqrt(d2);
      const f = (1 - d / repelRadius) * forceK * dt;
      p.vx += (dx / d) * f;
      p.vy += (dy / d) * f;
    }
    // friction + integrate
    p.vx *= 0.92;
    p.vy *= 0.92;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
  }

  /* ---------- main loop ---------- */
  function frame(now) {
    if (!running) return;

    const dt = clamp((now - lastFrameTime) / 16.67, 0.25, 3);
    lastFrameTime = now;
    const t = now * 0.001;

    /* dock state via scroll position (with hysteresis).
       Dock when the hero slot nears the nav zone; undock back near the top. */
    const dockThreshold = Math.max(heroDocTop - 96, 80);
    if (!docked && window.scrollY > dockThreshold) setDocked(true);
    else if (docked && window.scrollY < 20) setDocked(false);

    const stageRect = stage.getBoundingClientRect();
    const cx = stageRect.left + stageRect.width / 2;
    const cy = stageRect.top + stageRect.height / 2;
    const idle = now - pointer.lastMove > 4000;
    const gazeRange = Math.max(stageRect.width, 240) * 0.9;

    let nx = 0;
    let ny = 0;
    if (pointer.inside && !idle) {
      nx = clamp((pointer.x - cx) / gazeRange, -1, 1);
      ny = clamp((pointer.y - cy) / gazeRange, -1, 1);
    } else {
      // idle wander — the mascot keeps looking around on its own
      wanderT += 0.016 * dt;
      nx = Math.sin(wanderT * 0.9) * 0.55 + Math.sin(wanderT * 0.31) * 0.45;
      ny = Math.cos(wanderT * 0.6) * 0.5;
    }

    /* orb follows the cursor (desktop) / drifts gently (touch & idle) */
    const maxFollow = Math.max(2.5, stageRect.width * 0.075);
    if (pointer.fine && pointer.inside && !idle) {
      follow.x += (nx * maxFollow - follow.x) * 0.085 * dt;
      follow.y += (ny * maxFollow - follow.y) * 0.085 * dt;
    } else {
      wanderT += 0.012 * dt;
      const fx = Math.sin(wanderT * 0.5) * maxFollow * 0.45;
      const fy = Math.cos(wanderT * 0.4) * maxFollow * 0.35;
      follow.x += (fx - follow.x) * 0.05 * dt;
      follow.y += (fy - follow.y) * 0.05 * dt;
    }
    orbPos.style.transform = "translate3d(" + follow.x.toFixed(2) + "px, " + follow.y.toFixed(2) + "px, 0)";

    /* gaze: calculate from the orb's actual position, then smooth pixel movement.
       Using the stage center here made the eyes drift when the orb followed the pointer. */
    const orbRect = orb.getBoundingClientRect();
    const orbCx = orbRect.left + orbRect.width / 2;
    const orbCy = orbRect.top + orbRect.height / 2;
    const gazeNx = pointer.inside && !idle
      ? clamp((pointer.x - orbCx) / Math.max(orbRect.width * 0.62, 1), -1, 1)
      : nx;
    const gazeNy = pointer.inside && !idle
      ? clamp((pointer.y - orbCy) / Math.max(orbRect.height * 0.62, 1), -1, 1)
      : ny;
    const eyeTravelX = Math.max(3, orbRect.width * 0.105);
    const eyeTravelY = Math.max(3, orbRect.height * 0.085);
    const gazeEase = 1 - Math.exp(-0.16 * dt);

    /* gaze: shine marks track the pointer; docked default = look left */
    const scrolling = now < scrollBiasUntil;
    if (docked) {
      const near = pointer.inside && Math.hypot(pointer.x - orbCx, pointer.y - orbCy) < 160;
      if (near && !idle) {
        gaze.x += (gazeNx * eyeTravelX - gaze.x) * gazeEase;
        gaze.y += (gazeNy * eyeTravelY - gaze.y) * gazeEase;
      } else {
        gaze.x += (-eyeTravelX * 0.85 - gaze.x) * gazeEase;
        gaze.y += (-eyeTravelY * 0.12 - gaze.y) * gazeEase;
      }
    } else {
      gaze.x += (gazeNx * eyeTravelX - gaze.x) * gazeEase;
      gaze.y += (gazeNy * eyeTravelY + (scrolling ? scrollBias * 0.18 : 0) - gaze.y) * gazeEase;
    }
    orb.style.setProperty("--eye-x", gaze.x.toFixed(2) + "px");
    orb.style.setProperty("--eye-y", gaze.y.toFixed(2) + "px");

    /* curious: eyes widen when the pointer hovers the orb */
    const nearOrb = pointer.inside && Math.hypot(pointer.x - orbCx, pointer.y - orbCy) < orbRect.width * 0.7;
    if (nearOrb !== curious) {
      curious = nearOrb;
      orb.style.setProperty("--eye-s", curious ? "1.16" : "1");
    }

    /* blink scheduler (occasional quick double blink) */
    if (now > nextBlink) {
      blinkUntil = now + 130;
      nextBlink = Math.random() < 0.18 ? now + 380 : now + 2400 + Math.random() * 3200;
    }
    orb.classList.toggle("blinking", now < blinkUntil);

    /* particles */
    const px = pointer.inside ? pointer.x - stageRect.left : -9999;
    const py = pointer.inside ? pointer.y - stageRect.top : -9999;
    const repelRadius = Math.max(14, stageW * 0.26);
    const repelRadius2 = repelRadius * repelRadius;
    const forceK = Math.max(0.9, stageW * 0.013);
    for (let i = 0; i < halo.length; i++) {
      stepParticle(halo[i], dt, px, py, repelRadius, repelRadius2, forceK, t);
    }
    for (let i = 0; i < specks.length; i++) {
      stepParticle(specks[i], dt, px, py, repelRadius, repelRadius2, forceK, t);
    }
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.vx *= 0.94;
      s.vy *= 0.94;
      s.life -= 0.028 * dt;
      if (s.life <= 0) sparks.splice(i, 1);
    }
    drawParticles();

    rafId = requestAnimationFrame(frame);
  }

  function startLoop() {
    if (running) return;
    running = true;
    lastFrameTime = performance.now();
    rafId = requestAnimationFrame(frame);
  }

  function stopLoop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
  }

  if (reducedMotion) {
    /* Static companion: no loop, no tracking. Docking still works
       (instant) and CSS provides the docked look-left bias. */
    const updateDockStatic = () => {
      const threshold = Math.max(heroDocTop - 96, 80);
      setDocked(window.scrollY > threshold);
    };
    window.addEventListener("scroll", updateDockStatic, { passive: true });
    window.addEventListener("resize", () => {
      measureHeroDocTop();
      updateDockStatic();
    });
    updateDockStatic();
  } else {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopLoop();
      else startLoop();
    });
    startLoop();
  }
})();

/* ---------------------------------------------------------------
   9. COMMAND PALETTE (CTRL+K / CMD+K)
--------------------------------------------------------------- */
const cmdModal = document.getElementById("cmd-modal");
const cmdTriggerBtn = document.getElementById("cmd-trigger-btn");
const cmdInput = document.getElementById("cmd-input");
const cmdList = document.getElementById("cmd-list");

function openCmdPalette() {
  if (!cmdModal) return;
  cmdModal.classList.add("open");
  cmdModal.setAttribute("aria-hidden", "false");
  if (cmdInput) {
    cmdInput.value = "";
    cmdInput.focus();
  }
}

function closeCmdPalette() {
  if (!cmdModal) return;
  cmdModal.classList.remove("open");
  cmdModal.setAttribute("aria-hidden", "true");
}

function jumpToSection(sectionId) {
  closeCmdPalette();
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

if (cmdTriggerBtn) {
  cmdTriggerBtn.addEventListener("click", openCmdPalette);
}

if (cmdModal) {
  cmdModal.addEventListener("click", (e) => {
    if (e.target === cmdModal) closeCmdPalette();
  });
}

window.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if (cmdModal && cmdModal.classList.contains("open")) {
      closeCmdPalette();
    } else {
      openCmdPalette();
    }
  } else if (e.key === "Escape") {
    closeCmdPalette();
  }
});

if (cmdInput && cmdList) {
  cmdInput.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase().trim();
    const items = cmdList.querySelectorAll(".cmd-item");
    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(q) ? "flex" : "none";
    });
  });
}

/* ---------------------------------------------------------------
   10. DATA RENDERING (PROJECTS, TIMELINE, BLOGS, PROFILE)
--------------------------------------------------------------- */
let projectCategory = "All";
let blogCategory = "All";

function renderProjects() {
  const searchEl = document.getElementById("project-search");
  const grid = document.getElementById("projects-grid");
  const moreContainer = document.getElementById("projects-more");
  if (!grid) return;

  const search = searchEl ? searchEl.value.toLowerCase().trim() : "";
  const filtered = PROJECTS.filter((p) => {
    const matchCat = projectCategory === "All" || p.category === projectCategory;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search) ||
      (p.technologies || []).some((t) => t.toLowerCase().includes(search));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">No projects match your search criteria.</div>';
    if (moreContainer) moreContainer.innerHTML = "";
    return;
  }

  // Display at most 3 projects on homepage
  const displayed = filtered.slice(0, 3);

  grid.innerHTML = displayed
    .map((p) => {
      const techTags = (p.technologies || []).map((t) => `<span class="tag">${t}</span>`).join("");
      const highlights = (p.highlights || [])
        .map((h) => `<span class="project-highlight">${h}</span>`)
        .join("");

      return `
      <div class="card project-card">
        <div class="project-card-accent"></div>
        <div class="project-card-body">
          <div class="project-card-top">
            <div class="project-icon-box">
              ${p.icon && p.icon.length <= 4 ? p.icon : getSvgIcon("code")}
            </div>
            <div class="project-badges">
              <span class="card-meta">${p.difficulty} · ${p.status}</span>
            </div>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          ${highlights ? `<div class="project-highlights">${highlights}</div>` : ""}
          <div class="project-tech">${techTags}</div>
          <div class="project-links">
            ${
              p.github
                ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    <span>Code</span>
                  </a>`
                : ""
            }
            ${
              p.demo
                ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    <span>Live Demo</span>
                  </a>`
                : ""
            }
          </div>
        </div>
      </div>`;
    })
    .join("");

  if (moreContainer) {
    if (filtered.length > 3 || PROJECTS.length > 3) {
      moreContainer.innerHTML = `
        <div class="section-more-wrap">
          <a href="projects/index.html" class="btn-see-all">
            <span>See all projects (${PROJECTS.length})</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>`;
    } else {
      moreContainer.innerHTML = "";
    }
  }
}

function setProjectFilter(btn) {
  document.querySelectorAll("#project-filters .filter-pill").forEach((b) => {
    b.classList.remove("active");
    b.setAttribute("aria-selected", "false");
  });
  btn.classList.add("active");
  btn.setAttribute("aria-selected", "true");
  projectCategory = btn.dataset.cat || "All";
  renderProjects();
}

function filterProjects() {
  renderProjects();
}

function renderTimeline(items, containerSelector, fallbackIcon = "briefcase") {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = (items || [])
    .map((item) => {
      const badges = (item.badges || []).map((b) => `<span class="badge">${b}</span>`).join("");

      const bullets = (item.bullets || []).map((bullet) => `<li>${bullet}</li>`).join("");

      return `
      <div class="timeline-item">
        <div class="timeline-left">
          <div class="timeline-dot">
            ${getSvgIcon(item.icon === "🎓" ? "graduation" : item.icon === "🧠" ? "brain" : (item.icon === "🤖" || item.icon === "cpu") ? "cpu" : (item.icon || fallbackIcon))}
          </div>
        </div>
        <div class="card timeline-card">
          <div class="timeline-meta">
            <div>
              <div class="timeline-title">${item.title || ""}</div>
              <div class="timeline-sub">${item.subtitle || ""}</div>
            </div>
            <span class="timeline-period">${item.period || ""}</span>
          </div>
          ${badges ? `<div class="timeline-badges">${badges}</div>` : ""}
          <ul class="timeline-list">${bullets}</ul>
        </div>
      </div>`;
    })
    .join("");
}

function renderBlogs() {
  const searchEl = document.getElementById("blog-search");
  const grid = document.getElementById("blog-grid");
  const moreContainer = document.getElementById("blog-more");
  if (!grid) return;

  const search = searchEl ? searchEl.value.toLowerCase().trim() : "";
  const allBlogs = [...BLOGS].sort((a, b) => new Date(b.date) - new Date(a.date));

  const filtered = allBlogs.filter((b) => {
    const matchCat = blogCategory === "All" || b.category === blogCategory;
    const matchSearch =
      !search ||
      b.title.toLowerCase().includes(search) ||
      b.summary.toLowerCase().includes(search) ||
      (b.tags || []).some((t) => t.toLowerCase().includes(search));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results">No articles match your search criteria.</div>';
    if (moreContainer) moreContainer.innerHTML = "";
    return;
  }

  // Display at most 3 blogs on homepage
  const displayed = filtered.slice(0, 3);

  grid.innerHTML = displayed
    .map((b) => {
      const tags = (b.tags || []).map((t) => `<span class="tag"># ${t}</span>`).join("");
      const formattedDate = new Date(b.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      return `
      <article class="card blog-card">
        <div class="blog-card-body">
          <div class="blog-card-top">
            <span class="card-meta">${b.category || "AI"}</span>
            <span class="blog-date">${formattedDate}</span>
          </div>
          <h3 class="blog-title">${b.title}</h3>
          <p class="blog-summary">${b.summary}</p>
          <div class="blog-tags">${tags}</div>
          <div class="blog-footer">
            <span class="reading-time">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${b.readingTime || "5 min read"}
            </span>
            <a href="${b.link || 'blog/index.html'}" class="read-more">
              <span>Read article</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </article>`;
    })
    .join("");

  if (moreContainer) {
    if (filtered.length > 3 || allBlogs.length > 3) {
      moreContainer.innerHTML = `
        <div class="section-more-wrap">
          <a href="blog/index.html" class="btn-see-all">
            <span>See all articles (${allBlogs.length})</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>`;
    } else {
      moreContainer.innerHTML = "";
    }
  }
}

function setBlogFilter(btn) {
  document.querySelectorAll("#blog-filters .filter-pill").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  blogCategory = btn.dataset.cat || "All";
  renderBlogs();
}

function filterBlogs() {
  renderBlogs();
}

function renderSkills(skills) {
  const grid = document.querySelector(".skills-grid");
  if (!grid || !Array.isArray(skills) || skills.length === 0) return;
  grid.innerHTML = skills.map(group => {
    const tags = (group.items || []).map(item => `<span class="skill-tag">${item}</span>`).join("");
    const iconName = group.title.toLowerCase().includes("llm") || group.title.toLowerCase().includes("agent") ? "cpu" :
                     group.title.toLowerCase().includes("machine") ? "ml" :
                     group.title.toLowerCase().includes("data") ? "chart" :
                     group.title.toLowerCase().includes("program") ? "code" :
                     group.title.toLowerCase().includes("backend") ? "briefcase" : "code";
    return `
    <div class="card skill-group">
      <div class="skill-group-head">
        <p class="skill-group-title">
          ${getSvgIcon(iconName)}
          ${group.title}
        </p>
      </div>
      <div class="skill-tags">${tags}</div>
    </div>`;
  }).join("");
}

function renderResearch(research) {
  const grid = document.querySelector(".research-grid");
  if (!grid || !Array.isArray(research) || research.length === 0) return;
  grid.innerHTML = research.map((r) => `
    <div class="card research-card">
      <div class="research-card-top">
        <div class="research-icon-box" aria-hidden="true">
          ${getSvgIcon(r.emoji || "cpu")}
        </div>
        ${r.badge ? `<span class="card-meta">${r.badge}</span>` : ""}
      </div>
      <h3>${r.title}</h3>
      <p>${r.text}</p>
    </div>`).join("");
}

function applyHomepage() {
  const homepage = getHomepage();
  renderSkills(homepage.skills);
  renderResearch(homepage.research);
  renderTimeline(homepage.education, "#education-timeline", "graduation");
  renderTimeline(homepage.experience, "#experience-timeline", "briefcase");
}

function applyProfile() {
  const profile = getProfile();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------------
   11. CONTACT FORM HANDLER
--------------------------------------------------------------- */
function submitContact(e) {
  e.preventDefault();
  const name = document.getElementById("c-name").value;
  const email = document.getElementById("c-email").value;
  const subject = document.getElementById("c-subject").value || "Portfolio Inquiry";
  const message = document.getElementById("c-message").value;

  const profile = getProfile();
  const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const btn = document.getElementById("submit-btn");
  if (btn) {
    btn.innerHTML = `<span>Message ready — check your email client</span>`;
    btn.style.background = "var(--accent-green)";
    setTimeout(() => {
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
        <span>Send Message</span>`;
      btn.style.background = "";
    }, 5000);
  }
}

/* ---------------------------------------------------------------
   12. HERO STATS COUNT-UP ANIMATION
--------------------------------------------------------------- */
let statsAnimated = false;

function animateHeroStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll(".stat-val[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const decimals = (el.dataset.count.split(".")[1] || "").length;
    if (prefersReduced) {
      el.textContent = el.dataset.count;
      return;
    }
    const duration = 1000;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = (target * eased).toFixed(decimals) + (el.textContent.includes("+") ? "+" : "");
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ---------------------------------------------------------------
   13. INITIALIZATION & REFRESH
--------------------------------------------------------------- */
async function refreshFromRemoteData() {
  applyProfile();
  applyHomepage();
  renderProjects();
  renderBlogs();

  const data = await loadRemoteData();
  if (!data) return;

  REMOTE_DATA = data;
  if (data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
    PROJECTS = data.projects;
  } else {
    PROJECTS = readStoredJson(STORAGE_KEYS.projects, DEFAULT_PROJECTS);
  }

  if (data.blogs && Array.isArray(data.blogs) && data.blogs.length > 0) {
    BLOGS = data.blogs;
  } else {
    BLOGS = readStoredJson(STORAGE_KEYS.blogs, DEFAULT_BLOGS);
  }

  applyProfile();
  applyHomepage();
  renderProjects();
  renderBlogs();
}

/* ---------------------------------------------------------------
   14. GLOBAL EXPOSURE FOR HTML EVENT HANDLERS
--------------------------------------------------------------- */
window.openCmdPalette = openCmdPalette;
window.closeCmdPalette = closeCmdPalette;
window.jumpToSection = jumpToSection;
window.copyTextToClipboard = copyTextToClipboard;
window.copyEmailToClipboard = copyEmailToClipboard;
window.setProjectFilter = setProjectFilter;
window.filterProjects = filterProjects;
window.setBlogFilter = setBlogFilter;
window.filterBlogs = filterBlogs;
window.submitContact = submitContact;
window.toggleTheme = toggleTheme;

refreshFromRemoteData();
setTimeout(animateHeroStats, 400);
