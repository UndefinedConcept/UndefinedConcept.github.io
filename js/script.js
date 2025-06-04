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


// Remove animation for the skeleton loaded images
document.querySelectorAll('div.card-image img').forEach(img => {
  if (img.complete) {
    img.classList.add('imgLoaded');
  } else {
    img.addEventListener('load', () => img.classList.add('imgLoaded'));
    img.addEventListener('error', () => img.classList.add('imgLoaded'));
  }
});

// Fade in items on scroll (js part)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll-show');
      // wait for the animation to finish before removing the observer
      setTimeout(() => {
        entry.target.classList.remove('scroll-hidden');
        entry.target.classList.remove('scroll-show');
        observer.unobserve(entry.target);
      }, 800); // Adjust the timeout to match the animation duration
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
// add the scroll-hidden class to hiddenElements
hiddenElements.forEach((el) => {
  el.classList.add('scroll-hidden');
  el.classList.remove('hidden');
});
hiddenElements.forEach((el) => observer.observe(el));
