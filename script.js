//your JS code here. If required.
const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

// Function to get cookie value
function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();

    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return "";
}

// Apply saved settings on page load
window.onload = function () {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      savedFontSize
    );

    fontSizeInput.value = parseInt(savedFontSize);
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedFontColor
    );

    fontColorInput.value = savedFontColor;
  }
};

// Save settings
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fontSize = fontSizeInput.value + "px";
  const fontColor = fontColorInput.value;

  // Save cookies
  document.cookie = "fontsize=" + fontSize + "; path=/";
  document.cookie = "fontcolor=" + fontColor + "; path=/";

  // Apply styles immediately
  document.documentElement.style.setProperty(
    "--fontsize",
    fontSize
  );

  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
});