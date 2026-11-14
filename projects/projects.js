/* ============================================================
   PROJECTS ARCHIVE SCRIPT — ABDELRAHMAN ESLAM
   Data Source: data.json (with LocalStorage override fallback)
   ============================================================ */

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

const STORAGE_KEY = "portfolio.projects";

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

let PROJECTS = readStoredJson(STORAGE_KEY, DEFAULT_PROJECTS);
let projectCat = "All";

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

function getSvgIcon(name) {
  switch (name) {
    case "code":
    case "ml":
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    default:
      return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`;
  }
}

function renderProjects() {
  const searchEl = document.getElementById("project-search");
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  const search = searchEl ? searchEl.value.toLowerCase().trim() : "";
  const filtered = PROJECTS.filter((p) => {
    const matchCat = projectCat === "All" || p.category === projectCat;
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search) ||
      (p.technologies || []).some((t) => t.toLowerCase().includes(search));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML =
      '<div class="no-results" style="grid-column:1/-1">No projects match your search criteria.</div>';
    return;
  }

  grid.innerHTML = filtered
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
}

function setProjectFilter(btn) {
  document
    .querySelectorAll("#project-filters .filter-pill")
    .forEach((b) => {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
  btn.classList.add("active");
  btn.setAttribute("aria-selected", "true");
  projectCat = btn.dataset.cat || "All";
  renderProjects();
}

function filterProjects() {
  renderProjects();
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

async function init() {
  renderProjects();
  const data = await loadRemoteData();
  if (data && data.projects && Array.isArray(data.projects) && data.projects.length > 0) {
    REMOTE_DATA = data;
    PROJECTS = data.projects;
    renderProjects();
  }
}

init();
