// ── Overlay profil au CLIC ──
const profileCard = document.querySelector(".profile-card");
const overlayPopup = document.querySelector(".profile-overlay-popup");
const overlayBg = document.querySelector(".profile-overlay-bg");

if (profileCard && overlayPopup && overlayBg) {
  profileCard.addEventListener("click", () => {
    overlayPopup.classList.add("active");
    overlayBg.classList.add("active");
  });

  overlayBg.addEventListener("click", () => {
    overlayPopup.classList.remove("active");
    overlayBg.classList.remove("active");
  });

  const closeBtn = document.querySelector(".popup-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      overlayPopup.classList.remove("active");
      overlayBg.classList.remove("active");
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      overlayPopup.classList.remove("active");
      overlayBg.classList.remove("active");
    }
  });
}

// ── Lien actif dans la nav au scroll ──
const sections = document.querySelectorAll("section[id]");
const navLinksActive = document.querySelectorAll(".nav-links a"); // ← renommé

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinksActive.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`,
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  { threshold: 0.4 },
);

sections.forEach((section) => navObserver.observe(section));

// ── Barres de compétences ──
window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".skill-fill");

  bars.forEach((bar) => {
    bar.style.width = "0px";
  });

  setTimeout(() => {
    bars.forEach((bar) => {
      const targetWidth = bar.getAttribute("data-width");
      bar.style.width = targetWidth + "%";
    });
  }, 500);
});

// ── Animations au scroll ──
const animObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, i * 100);
        animObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll(".fade-in, .fade-left, .fade-right, .p-color")
  .forEach((el) => animObserver.observe(el));

// ── Menu burger mobile ──
const burger = document.getElementById("burger");
const navMenu = document.getElementById("navLinks"); // ← renommé

if (burger && navMenu) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navMenu.classList.toggle("open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("open");
      navMenu.classList.remove("open");
    });
  });
}
