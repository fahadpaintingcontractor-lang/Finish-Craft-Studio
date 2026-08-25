// ============================
// Smooth Navbar Background
// ============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    navbar.style.background = "rgba(15,15,15,0.92)";
    navbar.style.backdropFilter = "blur(20px)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";
  } else {
    navbar.style.background = "rgba(255,255,255,.08)";
    navbar.style.boxShadow = "none";
  }
});

// ============================
// Hero Fade In Animation
// ============================

window.addEventListener("load", () => {
  const cards = document.querySelectorAll(
    ".service-card, .project-card, .testimonial-card"
  );

  hero.style.opacity = "0";
  hero.style.transform = "translateY(40px)";

  setTimeout(() => {
    hero.style.transition = "1s ease";
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }, 300);
});

// ============================
// Button Hover Animation
// ============================

const buttons = document.querySelectorAll(".primary, .secondary");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.05)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});

// ============================
// Smooth Scroll for Navigation
// ============================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
// ============================
// Scroll Reveal Animation
// ============================

const cards = document.querySelectorAll(".card");

const reveal = () => {
  cards.forEach((card) => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
};

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.7s ease";
});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target + "+";
    }
  };
  update();
});
