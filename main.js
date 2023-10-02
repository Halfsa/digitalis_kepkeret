const kep = document.getElementById("kep");
const gomb = document.getElementById("btn");
const kepszel = document.getElementById("szeleseg");
const keretvastag = document.getElementById("vastag");
const szin = document.getElementById("szin");
const link = document.getElementById("link");
const btn = document.getElementById("buton");

gomb.addEventListener("click",function() {
  kep.width = kepszel.value;
  kep.src = link.value;
  kep.style.borderStyle = "solid"
  kep.style.borderWidth = keretvastag.value;
  kep.style.borderColor = szin.value;
});
btn.addEventListener("click",function() {
  document.body.classList.toggle("dark-mode");
});



