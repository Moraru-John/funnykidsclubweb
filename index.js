function toggleModeNav() {
    const nav = document.getElementById('nav');
    nav.classList.toggle("dark-nav");
}    
const currentMode = nav.classList.contains("dark-nav") ? "dark" : "light";
localStorage.setItem("mode", currentMode);


const storedMode = localStorage.getItem("mode");
if (storedMode === "dark") {
    toggleModeNav();
}

function toggleModeMain() {
  const main = document.getElementById('main');
  const header = document.getElementById('header');
  const footer = document.getElementById('footer')
  main.classList.toggle("dark-hmf");
  header.classList.toggle("dark-hmf");
  footer.classList.toggle("dark-hmf");
}

const modeToggleBtn = document.getElementById("mode-toggle");
modeToggleBtn.addEventListener("click", toggleModeNav);
modeToggleBtn.addEventListener("click", toggleModeMain);
