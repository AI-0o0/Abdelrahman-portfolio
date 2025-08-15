const BOT_TOKEN = process.env.TELE_API; // from BotFather
const CHAT_ID = process.env.CHAT_ID; // from @userinfobot or getUpdates
const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const text = `📩 *New Contact Form Submission*\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;

  fetch(TELEGRAM_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
      parse_mode: "Markdown",
    }),
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById("formSuccess").style.display = "block";
        document.getElementById("contactForm").reset();
      } else {
        alert("Error sending message. Please try again.");
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to send message.");
    });
});

/*********************
 * Theme (Dark/Light)
 *********************/
const THEME_KEY = "portfolio-theme";

function setTheme(mode) {
  document.body.setAttribute("data-theme", mode);
  localStorage.setItem(THEME_KEY, mode);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.textContent = mode === "light" ? "☀️ Theme" : "🌙 Theme";
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  setTheme(saved || "dark");
}

document.getElementById("themeToggle")?.addEventListener("click", () => {
  const now =
    document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
  setTheme(now);
});

/*********************
 * Mouse-follow glow
 *********************/
window.addEventListener(
  "mousemove",
  (e) => {
    const mx = (e.clientX / window.innerWidth) * 100;
    const my = (e.clientY / window.innerHeight) * 100;
    document.body.style.setProperty("--mx", mx + "%");
    document.body.style.setProperty("--my", my + "%");
  },
  { passive: true }
);

/*********************
 * Scroll progress & gradient motion
 *********************/
window.addEventListener(
  "scroll",
  () => {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const p = (scrolled / height) * 100;
    const progress = document.getElementById("scrollProgress");
    if (progress) progress.style.width = p + "%";

    // Move gradient focus subtly with scroll
    document.body.style.setProperty("--my", 20 + p * 0.5 + "%");
  },
  { passive: true }
);

/*********************
 * Parallax shapes
 *********************/
window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    document.querySelectorAll("[data-parallax]").forEach((el) => {
      const depth = parseFloat(el.getAttribute("data-parallax")) || 6;
      el.style.transform = `translateY(${y / depth}px)`;
    });
  },
  { passive: true }
);

/*********************
 * Particles (canvas)
 *********************/
function initParticles() {
  const canvas = document.getElementById("particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0,
    H = 0;
  let particles = [];
  let rafDraw = 0,
    rafResize = 0;

  function measure() {
    const rect = canvas.getBoundingClientRect();
    return {
      newW: Math.max(1, Math.floor(rect.width * DPR)),
      newH: Math.max(1, Math.floor(rect.height * DPR)),
    };
  }

  function applySize(newW, newH) {
    const changed = newW !== W || newH !== H;
    if (!changed) return false;
    W = newW;
    H = newH;
    canvas.width = W;
    canvas.height = H;
    return true;
  }

  function spawn() {
    particles = new Array(60).fill(0).map(() => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: (Math.random() * 2 + 0.5) * DPR,
      vx: (Math.random() - 0.5) * 0.2 * DPR,
      vy: (Math.random() - 0.5) * 0.2 * DPR,
      a: Math.random() * 0.6 + 0.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = "lighter";
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
      g.addColorStop(0, `rgba(122,162,255,${p.a})`);
      g.addColorStop(1, "rgba(122,162,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
      ctx.fill();
    }
    rafDraw = requestAnimationFrame(draw);
  }

  const ro = new ResizeObserver(() => {
    if (rafResize) cancelAnimationFrame(rafResize);
    rafResize = requestAnimationFrame(() => {
      const { newW, newH } = measure();
      const changed = applySize(newW, newH);
      if (changed) spawn();
    });
  });
  ro.observe(canvas);

  const { newW, newH } = measure();
  applySize(newW, newH);
  spawn();
  draw();

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(rafDraw);
    else rafDraw = requestAnimationFrame(draw);
  });
}

/*********************
 * Init
 *********************/
window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initParticles();
});

// Mobile menu toggle
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });

  // Hide menu when a link is clicked
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.style.display = "none";
    });
  });
}
