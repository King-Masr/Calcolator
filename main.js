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
let type = document.getElementById("type");
let result = document.getElementById("result");
let AC = document.getElementById("AC");
AC.onclick = function () {
  type.innerText = 0;
  result.innerText = 0;
};
let Del = document.getElementById("Del");
Del.onclick = function () {
  if (type.innerText.length == 1) {
    type.innerText = 0;
  } else {
    type.innerText = type.innerText.substring(0, type.innerText.length - 1);
  }
  result.innerText = 0;
};
let Percentsign = document.getElementById("Percentsign");
Percentsign.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += "%";
};
let Divisionsign = document.getElementById("Divisionsign");
Divisionsign.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += "/";
};
let Multiplicationsign = document.getElementById("Multiplicationsign");
Multiplicationsign.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += "*";
};
let Minussign = document.getElementById("Minussign");
Minussign.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += "-";
};
let Plussign = document.getElementById("Plussign");
Plussign.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += "+";
};
let Equalsign = document.getElementById("Equalsign"); // =============================
Equalsign.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += "=";
};
let One = document.getElementById("One");
One.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += 1;
}
let Two = document.getElementById("Two");
Two.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += 2;
};
let Three = document.getElementById("Three");
Three.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += 3;
};
let Four = document.getElementById("Four");
Four.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += 4;
};
let Five = document.getElementById("Five");
Five.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += 5;
};
let Six = document.getElementById("Six");
Six.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += 6;
};
let Saven = document.getElementById("Saven");
Saven.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += 7;
};
let Eight = document.getElementById("Eight");
Eight.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += 8;
};
let Nine = document.getElementById("Nine");
Nine.onclick = function () {
  if (type.innerText == 0) type.innerText = "";
  type.innerText += 9;
};
let Zero = document.getElementById("Zero");
Zero.onclick = function () {
  if (type.innerText != 0) type.innerText += 0;
};
let DoubleZero = document.getElementById("DoubleZero");
DoubleZero.onclick = function () {
  if (type.innerText != 0) type.innerText += 00;
};
let Dot = document.getElementById("Dot");
Dot.onclick = function () {
  if (type.innerText != 0) type.innerText += ".";
};