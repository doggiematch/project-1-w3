const btn = document.querySelector(".btn-menu");
const menu = document.getElementById("nav-menu");

btn.addEventListener("click", function () {
  menu.classList.toggle("nav-open");
});
