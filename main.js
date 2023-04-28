window.onload = function () {
  document.getElementsByTagName("link")[2].href = "css/dark.css";
};
let lightBtn = document.getElementById("light");
lightBtn.onclick = function () {
  document.getElementsByTagName("link")[2].href = "css/style.css";
};
let darkBtn = document.getElementById("dark");
darkBtn.onclick = function () {
  document.getElementsByTagName("link")[2].href = "css/dark.css";
};
