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
// copyright();
