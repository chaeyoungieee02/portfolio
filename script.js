// Mobile dropdown toggle for non-clickable button titles
const dropdownButtons = document.querySelectorAll(".dropdown > .dropdown-toggle");

dropdownButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 1080px)").matches) {
      e.preventDefault();
      const parent = btn.parentElement;
      const isOpen = parent.classList.contains("open");

      // close others
      document.querySelectorAll(".dropdown.open").forEach((d) => {
        d.classList.remove("open");
        const b = d.querySelector(".dropdown-toggle");
        if (b) b.setAttribute("aria-expanded", "false");
      });

      // toggle current
      if (!isOpen) {
        parent.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      } else {
        btn.setAttribute("aria-expanded", "false");
      }
    }
  });
});

// close when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown.open").forEach((d) => {
      d.classList.remove("open");
      const b = d.querySelector(".dropdown-toggle");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  }
});
