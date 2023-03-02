"strict mode";

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section-[id]");

open.addEventListener("click", () => {
  menu.classList.remove("hide");
});
close.addEventListener("click", () => {
  menu.classList.add("hide");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hide");
  });
});

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    sectionId = section.getAttribute("id");

    if (
      window.offsetTop > sectionTop &&
      window.offsetTop <= sectionTop + sectionHeight
    ) {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
