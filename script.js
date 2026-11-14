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

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
    mobileMenu.setAttribute("aria-hidden", !isOpen);
  });
}

function closeMobileMenu() {
  if (mobileMenu && hamburger) {
    mobileMenu.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
  }
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
   8. INTERACTIVE DEVELOPER TERMINAL
--------------------------------------------------------------- */
const terminalScreen = document.getElementById("terminal-screen");

const TERM_SNIPPETS = {
  agent: `
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-cmd">python -m greenfield.orchestrator --checkpoint sqlite://checkpoints.db</span></div>
<div class="term-out">[LangGraph] Loading stateful graph: <span class="highlight">4 specialized agents registered</span></div>
<div class="term-out">[Tool Registry] FastMCP tools initialized: least-privilege boundaries enforced</div>
<div class="term-out">[Planning] Dynamic task decomposition: ReAct + Tree of Thoughts active</div>
<div class="term-out success">[✓] Orchestration running: Durable checkpoints saved | HITL approvals ready</div>
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-caret"></span></div>`,

  profile: `
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-cmd">cat profile.json</span></div>
<div class="term-out">{</div>
<div class="term-out">&nbsp;&nbsp;<span style="color:#58a6ff">"name"</span>: <span style="color:#a5d6ff">"Abdelrahman Eslam"</span>,</div>
<div class="term-out">&nbsp;&nbsp;<span style="color:#58a6ff">"degree"</span>: <span style="color:#a5d6ff">"BSc in Computer & Data Science"</span>,</div>
<div class="term-out">&nbsp;&nbsp;<span style="color:#58a6ff">"institution"</span>: <span style="color:#a5d6ff">"Alexandria University ('28)"</span>,</div>
<div class="term-out">&nbsp;&nbsp;<span style="color:#58a6ff">"gpa"</span>: <span style="color:#79c0ff">3.45</span>,</div>
<div class="term-out">&nbsp;&nbsp;<span style="color:#58a6ff">"focus"</span>: <span style="color:#a5d6ff">"AI Engineering, LLM Systems, MCP & LangGraph"</span>,</div>
<div class="term-out">&nbsp;&nbsp;<span style="color:#58a6ff">"status"</span>: <span style="color:#34d399">"Seeking AI/ML Engineering Internships"</span></div>
<div class="term-out">}</div>
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-caret"></span></div>`,

  rag: `
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-cmd">python terms_eval.py --bilingual --reranker cross-encoder</span></div>
<div class="term-out">[1/3] Hybrid Retrieval: Dense vector + BM25 keyword matching (Arabic & English)...</div>
<div class="term-out">[2/3] Cross-encoder reranking: Top-5 grounded clauses selected (Score > 0.92)...</div>
<div class="term-out">[3/3] Transformers pipeline: NER & PII detection executed...</div>
<div class="term-out success">[✓] Evaluation passed: 0 hallucination | Grounded QA synthesis complete</div>
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-caret"></span></div>`,
};

function switchTermTab(tabId) {
  document.querySelectorAll(".term-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabId);
  });
  if (terminalScreen && TERM_SNIPPETS[tabId]) {
    terminalScreen.innerHTML = TERM_SNIPPETS[tabId];
  }
}

function runTermCommand(cmd) {
  if (!terminalScreen) return;
  const currentLines = terminalScreen.innerHTML;

  let output = "";
  if (cmd === "skills") {
    output = `
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-cmd">skills</span></div>
<div class="term-out">→ Languages: Python, SQL, Java, C++, R, JavaScript</div>
<div class="term-out">→ LLMs & Agents: RAG & Self-RAG, LangGraph, MCP, LangChain, Tool Calling</div>
<div class="term-out">→ ML & DL: PyTorch, Transformers, NLP, Scikit-learn, Embeddings, Evaluation</div>
<div class="term-out">→ Backend & Cloud: FastAPI, REST APIs, MySQL, SQLite, Docker, AWS (EC2)</div>
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-caret"></span></div>`;
  } else if (cmd === "projects") {
    output = `
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-cmd">projects</span></div>
<div class="term-out">1. Terms – AI Legal Document Analysis (LangGraph, Bilingual RAG, Transformers)</div>
<div class="term-out">2. Greenfield Autonomous Multi-Agent Platform (LangGraph, Self-RAG, Docker)</div>
<div class="term-out">3. WanderPath Travel Agency (Secure FastMCP Server, Role Auth, Gemini)</div>
<div class="term-out">4. FIFA Player Market Value ML Pipeline (96% R² Automated Pipeline)</div>
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-caret"></span></div>`;
  } else if (cmd === "whoami") {
    output = `
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-cmd">whoami</span></div>
<div class="term-out">Abdelrahman Eslam — Computer & Data Science @ Alexandria University ('28)</div>
<div class="term-out">Focused on AI Engineering, LLM Systems, LangGraph, and Secure MCP Tooling.</div>
<div class="term-out">Seeking AI/ML Engineering Internships & Research Collaborations.</div>
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-caret"></span></div>`;
  } else if (cmd === "contact") {
    output = `
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-cmd">contact</span></div>
<div class="term-out">Email: abdelrahmaneslamomar@gmail.com</div>
<div class="term-out">GitHub: https://github.com/AI-0o0</div>
<div class="term-out">LinkedIn: https://linkedin.com/in/abdelrahmaneslam</div>
<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-caret"></span></div>`;
  } else if (cmd === "clear") {
    terminalScreen.innerHTML = `<div class="term-line"><span class="term-prompt">user@ai-lab:~$</span> <span class="term-caret"></span></div>`;
    return;
  }

  terminalScreen.innerHTML = currentLines.replace('<span class="term-caret"></span>', "") + output;
  terminalScreen.scrollTop = terminalScreen.scrollHeight;
}

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
window.switchTermTab = switchTermTab;
window.runTermCommand = runTermCommand;
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

