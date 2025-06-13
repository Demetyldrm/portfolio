const hamburger = document.getElementById("hamburger");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("active");
  hamburger.classList.toggle("open");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("clicked");
    setTimeout(() => {
      link.classList.remove("clicked");
    }, 500);
  });
});
