const menu = document.getElementById("menu-icon");
const close = document.getElementById("close-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
  navbar.classList.toggle("reveal");
  menu.style.display = 'none'
  close.style.display = 'block'
});

close.addEventListener("click", function () {
  navbar.classList.toggle("reveal");
  menu.style.display = 'block'
  close.style.display = 'none'
});

