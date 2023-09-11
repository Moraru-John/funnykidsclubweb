const currentMode = nav.classList.contains("dark-nav") ? "dark" : "light";
localStorage.setItem("mode", currentMode);


const storedMode = localStorage.getItem("mode");
if (storedMode === "dark") {
    toggleMode();
}

function toggleMode() {
  const nav = document.getElementById('nav');
  const main = document.getElementById('main');
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  nav.classList.toggle("dark-nav");
  main.classList.toggle("dark-hmf");
  header.classList.toggle("dark-hmf");
  footer.classList.toggle("dark-hmf");
}

const modeToggleBtn = document.getElementById("mode-toggle");
modeToggleBtn.addEventListener("click", toggleMode);
