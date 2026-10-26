document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('[class*="animate-"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
});


/* ---------- Menú desplegable (móvil y tablet) ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const boton = document.querySelector(".menu-toggle");
  const overlay = document.querySelector(".menu-overlay");
  if (!header || !boton) return;

  function abrir(abierto) {
    header.classList.toggle("menu-abierto", abierto);
    document.body.classList.toggle("menu-bloqueado", abierto);
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
  }

  boton.addEventListener("click", () => abrir(!header.classList.contains("menu-abierto")));
  overlay?.addEventListener("click", () => abrir(false));
  document.addEventListener("keydown", e => { if (e.key === "Escape") abrir(false); });
  header.querySelectorAll(".menu-panel a").forEach(a => a.addEventListener("click", () => abrir(false)));
  window.matchMedia("(min-width: 1181px)").addEventListener("change", e => { if (e.matches) abrir(false); });
});
