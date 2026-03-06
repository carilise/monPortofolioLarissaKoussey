// ── Overlay profil au CLIC ──
const profileCard = document.querySelector(".profile-card");
const overlayPopup = document.querySelector(".profile-overlay-popup");
const overlayBg = document.querySelector(".profile-overlay-bg");

// ── Lien actif dans la nav au scroll ──
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Enlever actif sur tous les liens
        navLinks.forEach((link) => link.classList.remove("active"));

        // Ajouter actif sur le lien correspondant
        const activeLink = document.querySelector(
          `.nav-links a[href="#${entry.target.id}"]`,
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  { threshold: 0.4 },
);

sections.forEach((section) => navObserver.observe(section));

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

// ── Barres de compétences ──
// On attend que la page soit complètement chargée
window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".skill-fill");
  console.log("Nombre de barres trouvées :", bars.length); // ← vérification

  bars.forEach((bar) => {
    bar.style.width = "0px";
  });

  // On anime après 500ms
  setTimeout(() => {
    bars.forEach((bar) => {
      const targetWidth = bar.getAttribute("data-width");
      console.log("Animation barre :", targetWidth); // ← vérification
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

// On applique sur tous les éléments animés
document
  .querySelectorAll(".fade-in, .fade-left, .fade-right, .p-color")
  .forEach((el) => animObserver.observe(el));
