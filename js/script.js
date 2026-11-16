document.addEventListener("DOMContentLoaded", () => {
  const options = {
    strings: ["Full Stack Developer", "UI/UX Designer"],
    typeSpeed: 60,
    backSpeed: 30,
    startDelay: 500,
    showCursor: true,
    cursorChar: "|",
    loop: false,
  };

  // Initialize Typed.js on the #typed-text element
  const typed = new Typed("#typed-text", options);

  // get year
  document.getElementById("year").textContent = new Date().getFullYear();
});
