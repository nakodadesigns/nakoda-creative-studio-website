const menuButton = document.getElementById("menu");
const nav = document.getElementById("navlinks");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("enquiry").addEventListener("submit", function (event) {
  event.preventDefault();
  const form = new FormData(this);
  const message = [
    "New Website Enquiry - Nakoda Creative Studio",
    "",
    "Contact Person: " + form.get("name"),
    "Business Name: " + (form.get("business") || "Not provided"),
    "WhatsApp / Phone: " + form.get("phone"),
    "Email: " + form.get("email"),
    "Business Type: " + form.get("businessType"),
    "Service Required: " + form.get("service"),
    "City: " + form.get("city"),
    "State: " + form.get("state"),
    "Country: India",
    "T&C Accepted: Yes",
    "",
    "Project Details: " + form.get("message")
  ].join("\\n");

  window.open(
    "https://wa.me/919890053179?text=" + encodeURIComponent(message),
    "_blank",
    "noopener,noreferrer"
  );
});


// Polished entrance and scroll-reveal motion. Content remains visible if JS/observer is unavailable.
document.documentElement.classList.add("js-motion");
const revealTargets = document.querySelectorAll(
  ".section-head, .industry-grid, .about-grid, .services-grid, .process-line, .portfolio-layout, .digital-grid, .contact-grid, .footer-grid"
);
if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("reveal-ready");
  revealTargets.forEach((el) => el.classList.add("reveal"));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealTargets.forEach((el) => revealObserver.observe(el));
}


// Reveal section text with a restrained heading -> paragraph rhythm.
if ("IntersectionObserver" in window) {
  const textTargets = document.querySelectorAll(
    ".section-head, .about-copy, .portfolio-intro, .digital-grid > div:first-child, .process, .contact-copy, .services-grid, .industry-grid, .portfolio-grid, .contact-form, .checklist, .stats"
  );
  textTargets.forEach((el) => el.classList.add("reveal-copy"));
  const textObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
  textTargets.forEach((el) => textObserver.observe(el));
}
