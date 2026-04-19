// Footer year
document.querySelectorAll("#year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Earth Age Calculator
const ageInput = document.getElementById("age");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

if (ageInput && calcBtn && result) {
  const planets = [
    { name: "Mercury", period: 0.24 },
    { name: "Venus", period: 0.62 },
    { name: "Mars", period: 1.88 },
    { name: "Jupiter", period: 11.86 },
    { name: "Saturn", period: 29.46 },
    { name: "Uranus", period: 84.01 },
    { name: "Neptune", period: 164.8 },
  ];

  calcBtn.addEventListener("click", () => {
    const earthAge = parseFloat(ageInput.value);
    if (Number.isNaN(earthAge) || earthAge < 0) {
      result.textContent = "Please enter a valid age.";
      return;
    }
    const lines = planets.map((p) => `${p.name}: ${(earthAge / p.period).toFixed(2)} years`);
    result.textContent = `Earth: ${earthAge.toFixed(2)} years\n` + lines.join("\n");
  });
}

// Mobile dropdown toggle
document.querySelectorAll(".dropdown > a").forEach((a) => {
  a.addEventListener("click", (e) => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      const parent = a.parentElement;
      const menu = parent.querySelector(".dropdown-menu");
      if (!menu) return;

      e.preventDefault();
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
