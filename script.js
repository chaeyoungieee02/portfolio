document.querySelectorAll("#year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Mobile tap-to-open for dropdowns (titles are buttons, not links)
document.querySelectorAll(".dropdown > .dropdown-toggle").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      e.preventDefault();
      const parent = btn.parentElement;
      parent.classList.toggle("open");

      document.querySelectorAll(".dropdown.open").forEach((d) => {
        if (d !== parent) d.classList.remove("open");
      });
    }
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown.open").forEach((d) => d.classList.remove("open"));
  }
});
