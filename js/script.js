// Script for the reactive table of contents/nav and Scroll Up Button
const sections = document.querySelectorAll("section[id]");

// Nav Bar
document.querySelector(`header nav a[href*='About']`).classList.add("active");
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 400;
    const sectionId = current.getAttribute("id");

    if (
      !(sectionId == "footer") &&
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document
        .querySelector(`header nav a[href*='${sectionId}']`)
        .classList.add("active");
    } else {
      document
        .querySelector(`header nav a[href*='${sectionId}']`)
        .classList.remove("active");
    }
  });
});

// Tab Index Accessibility (centers focused element)
document.querySelectorAll('[tabindex="0"]').forEach((element) => {
  element.addEventListener("focus", function () {
    this.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

// Glowing Mouse
const glowMouse = document.querySelector(".glow-mouse");
glowMouse.style.display = "block";
document.addEventListener("mousemove", function (e) {
  glowMouse.style.left = `${e.clientX - 240}px`;
  glowMouse.style.top = `${e.clientY - 240}px`;
});
