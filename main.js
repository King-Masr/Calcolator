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
let Del = document.getElementById("Del");
let Percentsign = document.getElementById("Percentsign");
let Divisionsign = document.getElementById("Divisionsign");
let Multiplicationsign = document.getElementById("Multiplicationsign");
let Minussign = document.getElementById("Minussign");
let Plussign = document.getElementById("Plussign");
let Equalsign = document.getElementById("Equalsign");
let One = document.getElementById("One");
One.onclick = function () {
  type.innerText += 1;
}
let Two = document.getElementById("Two");
Two.onclick = function () {
  type.innerText += 2;
};
let Three = document.getElementById("Three");
Three.onclick = function () {
  type.innerText += 3;
};
let Four = document.getElementById("Four");
Four.onclick = function () {
  type.innerText += 4;
};
let Five = document.getElementById("Five");
Five.onclick = function () {
  type.innerText += 5;
};
let Six = document.getElementById("Six");
Six.onclick = function () {
  type.innerText += 6;
};
let Saven = document.getElementById("Saven");
Saven.onclick = function () {
  type.innerText += 7;
};
let Eight = document.getElementById("Eight");
Eight.onclick = function () {
  type.innerText += 8;
};
let Nine = document.getElementById("Nine");
Nine.onclick = function () {
  type.innerText += 9;
};
let Zero = document.getElementById("Zero");
Zero.onclick = function () {
  type.innerText += 0;
};
let DoubleZero = document.getElementById("DoubleZero");
DoubleZero.onclick = function () {
  type.innerText += 00;
};
let Dot = document.getElementById("Dot");
Dot.onclick = function () {
  type.innerText += ".";
};