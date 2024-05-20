// Animation On Scroll
AOS.init({
  easing: "ease",
  once: true,
  duration: 1000,
});

// Copyright
const copyright = () => {
  const tag = document.querySelector("#copyright");
  const year = new Date().getFullYear();
  tag.textContent = year;
};
copyright();

// Mission
const missionToggle = () => {
  const cards = document.querySelectorAll(".mission .card");
  cards.forEach((card) => {
    const toggle = card.querySelector("b");
    toggle.addEventListener("click", () => {
      if (card.classList.contains("hide")) {
        card.classList.remove("hide");
        card.classList.add("show");
        toggle.textContent = "Show Less";
      } else {
        card.classList.add("hide");
        card.classList.remove("show");
        toggle.textContent = "Read More";
      }
    });
  });
};
missionToggle();
