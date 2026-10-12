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
