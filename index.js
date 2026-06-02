// =========================
// Server Health Check
// =========================

async function serverHealthCheck() {
  const servers = [
    `${backendService.URL1}/health`,
    `${backendService.URL2}/health`,
    `${backendService.URL3}/health`
  ];

  try {
    const results = await Promise.allSettled(
      servers.map(async (url) => {
        const response = await fetch(url, {
          method: "GET",
          cache: "no-cache"
        });

        if (!response.ok) {
          throw new Error(`${url} failed`);
        }

        return url;
      })
    );

    const failedServers = results.filter(
      result => result.status === "rejected"
    );

    if (failedServers.length === servers.length) {
      console.error("All servers health check failed!");
    }

  } catch (err) {
    console.error(err);
  }
}

serverHealthCheck();


// =========================
// Dark Mode with Timed Override (2 hours)
// =========================

const card_p = document.getElementsByClassName("common");
const toggleSwitch = document.getElementById("modeToggle");
const OVERRIDE_DURATION = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

// Function to check if current time is between 6 PM (18:00) and 5 AM (05:00)
function isNightTime() {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 18 || hours < 5;
}

// Function to apply theme
function applyTheme(theme, saveToStorage = true) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    Array.from(card_p).forEach(card => {
      card.classList.add("textBlack");
    });
    if (toggleSwitch) {
      toggleSwitch.checked = true;
    }
    if (saveToStorage) {
      localStorage.setItem("theme", "dark");
      localStorage.setItem("themeSource", "user");
      localStorage.setItem("overrideTimestamp", Date.now().toString());
    }
  } else {
    document.body.classList.remove("dark-mode");
    Array.from(card_p).forEach(card => {
      card.classList.remove("textBlack");
    });
    if (toggleSwitch) {
      toggleSwitch.checked = false;
    }
    if (saveToStorage) {
      localStorage.setItem("theme", "light");
      localStorage.setItem("themeSource", "user");
      localStorage.setItem("overrideTimestamp", Date.now().toString());
    }
  }
}

// Function to get auto theme based on time
function getAutoTheme() {
  return isNightTime() ? "dark" : "light";
}

// Function to apply auto theme
function applyAutoTheme() {
  const autoTheme = getAutoTheme();
  if (autoTheme === "dark") {
    document.body.classList.add("dark-mode");
    Array.from(card_p).forEach(card => {
      card.classList.add("textBlack");
    });
    if (toggleSwitch) {
      toggleSwitch.checked = true;
    }
  } else {
    document.body.classList.remove("dark-mode");
    Array.from(card_p).forEach(card => {
      card.classList.remove("textBlack");
    });
    if (toggleSwitch) {
      toggleSwitch.checked = false;
    }
  }
}

// Function to set theme based on user preference or time
function setInitialTheme() {
  const savedTheme = localStorage.getItem("theme");
  const themeSource = localStorage.getItem("themeSource");
  const overrideTimestamp = localStorage.getItem("overrideTimestamp");

  // Check if manual override is still valid
  if (savedTheme && themeSource === "user" && overrideTimestamp) {
    const timeSinceOverride = Date.now() - parseInt(overrideTimestamp);

    if (timeSinceOverride < OVERRIDE_DURATION) {
      // Override is still valid
      applyTheme(savedTheme, false);
    } else {
      // Override expired, clear and use auto
      localStorage.removeItem("theme");
      localStorage.removeItem("themeSource");
      localStorage.removeItem("overrideTimestamp");
      applyAutoTheme();
    }
  } else {
    // Use time-based auto theme
    applyAutoTheme();
  }
}

// Manual theme switching by user
function switchTheme(e) {
  if (e.target.checked) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }
}

// Reset to auto theme
function resetToAutoTheme() {
  localStorage.removeItem("theme");
  localStorage.removeItem("themeSource");
  localStorage.removeItem("overrideTimestamp");
  applyAutoTheme();
}

// Listen for manual toggle changes
if (toggleSwitch) {
  toggleSwitch.addEventListener("change", switchTheme);
}

// Initialize theme on page load
window.addEventListener("DOMContentLoaded", () => {
  setInitialTheme();
});

// Watch for time changes and override expiration
let lastHour = new Date().getHours();

setInterval(() => {
  const currentHour = new Date().getHours();
  const themeSource = localStorage.getItem("themeSource");
  const overrideTimestamp = localStorage.getItem("overrideTimestamp");

  // Check if override has expired
  if (themeSource === "user" && overrideTimestamp) {
    const timeSinceOverride = Date.now() - parseInt(overrideTimestamp);
    if (timeSinceOverride >= OVERRIDE_DURATION) {
      // Override expired, clear and apply auto
      localStorage.removeItem("theme");
      localStorage.removeItem("themeSource");
      localStorage.removeItem("overrideTimestamp");
      applyAutoTheme();
      return;
    }
  }

  // Only auto-switch by time if no active manual override
  if (themeSource !== "user" || (overrideTimestamp && (Date.now() - parseInt(overrideTimestamp)) >= OVERRIDE_DURATION)) {
    if (currentHour !== lastHour) {
      const wasNight = lastHour >= 18 || lastHour < 5;
      const isNowNight = currentHour >= 18 || currentHour < 5;

      if (wasNight !== isNowNight) {
        applyAutoTheme();
      }
    }
  }

  lastHour = currentHour;
}, 60000);

// =========================
// Mobile Navbar
// =========================

const menu = document.querySelector(".menu");
const header = document.querySelector("header");

menu?.addEventListener("click", () => {
  header.classList.toggle("active");
});


// Close Menu After Clicking Link

document.querySelectorAll("nav a").forEach(link => {

  link.addEventListener("click", () => {

    if (window.innerWidth < 880) {
      header.classList.remove("active");
    }

  });

});


// =========================
// Scroll To Top
// =========================

const mybutton = document.getElementById("to-btn");

window.addEventListener("scroll", () => {

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }

});


function f1() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}