const cookieNotice = document.getElementById("cookie-notice");
const toggleThemeButton = document.getElementById("theme-button");
const acceptButton = document.getElementById("accept");
const declineButton = document.getElementById("decline");

let theme = "dark";

toggleThemeButton.addEventListener("click", toggleTheme);

function toggleTheme() {
  document.body.classList.toggle("dark");
  if (theme === "light") {
    theme = "dark";
  } else {
    theme = "light";
  }
  document.cookie = "theme=" + theme;
}

// Cookies
acceptButton.addEventListener("click", () => {
  console.log("Accepted!");
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=true";
});

declineButton.addEventListener("click", () => {
  console.log("Declined!");
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=false";
});

// Show cookie message if not been asked before
function checkCookies() {
  const cookiesAccepted = document.cookie.includes("cookiesAccepted");
  if (!cookiesAccepted) {
    cookieNotice.style.display = "block";
  } else {
    cookieNotice.style.display = "none";
  }

  // Theme
  const themeCookie = document.cookie.includes("theme");
  if (themeCookie) {
    if (document.cookie.includes("theme=light")) {
      toggleTheme();
    }
  }
}
checkCookies();
