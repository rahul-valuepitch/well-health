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

// Hero Text Toggle
const heroTextToggle = () => {
  const toggle = document.querySelector(".hero .text-toggle");
  const text = document.querySelector(".hero p");

  toggle.addEventListener("click", () => {
    if (text.classList.contains("hide")) {
      text.classList.remove("hide");
      text.classList.add("show");
      toggle.textContent = "Show Less";
    } else {
      text.classList.add("hide");
      text.classList.remove("show");
      toggle.textContent = "Read More";
    }
  });
};

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
