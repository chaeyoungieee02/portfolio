// Mobile dropdown toggle
const dropdownLinks = document.querySelectorAll(".dropdown > a");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 1080px)").matches) {
      const parent = link.parentElement;
      const menu = parent.querySelector(".dropdown-menu");
      if (!menu) return;

      // first tap opens menu, second tap follows link
      if (!parent.classList.contains("open")) {
        e.preventDefault();
        document.querySelectorAll(".dropdown.open").forEach((d) => {
          if (d !== parent) d.classList.remove("open");
        });
        parent.classList.add("open");
      }
    }
  });
});

// close when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown.open").forEach((d) => d.classList.remove("open"));
  }
});
