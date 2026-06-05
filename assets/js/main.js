// Menú móvil
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", () => nav.classList.toggle("nav__open"));
  }
});
