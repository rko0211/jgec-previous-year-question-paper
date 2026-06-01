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
// Dark Mode with Time-Based Auto Switch
// =========================

const card_p = document.getElementsByClassName("common");
const toggleSwitch = document.getElementById("modeToggle");

// Function to check if current time is between 6 PM (18:00) and 5 AM (05:00)
function isNightTime() {
  const now = new Date();
  const hours = now.getHours();
  // Night time: 18:00 (6 PM) to 05:00 (5 AM) next day
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
    }
  }
}

// Function to get auto theme based on time
function getAutoTheme() {
  return isNightTime() ? "dark" : "light";
}

// Function to apply auto theme (without saving to storage)
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

  // If user has previously manually chosen a theme
  if (savedTheme && themeSource === "user") {
    applyTheme(savedTheme, false);
  } else {
    // Auto theme based on time
    applyAutoTheme();
    // Don't save auto theme to storage - let time decide
  }
}

// Manual theme switching by user
function switchTheme(e) {
  if (e.target.checked) {
    // User manually switched to dark mode
    document.body.classList.add("dark-mode");
    Array.from(card_p).forEach(card => {
      card.classList.add("textBlack");
    });
    localStorage.setItem("theme", "dark");
    localStorage.setItem("themeSource", "user");
  } else {
    // User manually switched to light mode
    document.body.classList.remove("dark-mode");
    Array.from(card_p).forEach(card => {
      card.classList.remove("textBlack");
    });
    localStorage.setItem("theme", "light");
    localStorage.setItem("themeSource", "user");
  }
}

// Optional: Add a "Reset to Auto" button functionality
function resetToAutoTheme() {
  localStorage.removeItem("theme");
  localStorage.removeItem("themeSource");
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

// Optional: Watch for time changes (every minute to auto-switch at 6 PM and 5 AM)
let lastHour = new Date().getHours();

setInterval(() => {
  const currentHour = new Date().getHours();
  const themeSource = localStorage.getItem("themeSource");

  // Only auto-switch if user hasn't manually chosen a theme
  if (themeSource !== "user") {
    // Check if hour crossed the threshold (6 PM or 5 AM)
    if (currentHour !== lastHour) {
      const wasNight = lastHour >= 18 || lastHour < 5;
      const isNowNight = currentHour >= 18 || currentHour < 5;

      if (wasNight !== isNowNight) {
        // Time boundary crossed, update theme
        applyAutoTheme();
      }
      lastHour = currentHour;
    }
  }
}, 60000); // Check every minute


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