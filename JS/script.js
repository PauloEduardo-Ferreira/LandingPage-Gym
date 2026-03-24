// Olyfit Club Vanilla JS
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobileMenuBtn.classList.toggle("open");
  });

  // Smooth Scroll
  document.querySelectorAll("[data-scroll]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-scroll");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      mobileMenu.classList.remove("active");
      mobileMenuBtn.classList.remove("open");
    });
  });

  // Form WhatsApp
  const form = document.getElementById("contatoForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const fullMessage = `Olá! Meu nome é ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/5511945429451?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    form.reset();
  });

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all animate elements
  document.querySelectorAll(".animate").forEach((el) => {
    observer.observe(el);
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
      header.style.background = "rgba(0, 0, 0, 0.98)";
    } else {
      header.style.background = "rgba(0, 0, 0, 0.95)";
    }
  });

  // Planos WhatsApp buttons
  document.querySelectorAll(".card-plano button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const planoName = btn
        .closest(".card-plano")
        .querySelector("h3").textContent;
      const message = `Olá! Tenho interesse no plano ${planoName}.`;
      window.open(
        `https://wa.me/5511945429451?text=${encodeURIComponent(message)}`,
        "_blank",
      );
    });
  });
});

// Close mobile menu on window resize
window.addEventListener("resize", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  mobileMenu.classList.remove("active");
  mobileMenuBtn.classList.remove("open");
});
