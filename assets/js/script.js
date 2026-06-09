const menuButton = document.querySelector("#menuButton");
const navLinks = document.querySelector("#navLinks");
const allNavLinks = document.querySelectorAll(".nav-links a");
const year = document.querySelector("#year");
const stackButtons = document.querySelectorAll(".stack-item");
const stackContents = document.querySelectorAll(".stack-content");
const messageForm = document.querySelector("#messageForm");
const feedback = document.querySelector("#feedback");
const cursorGlow = document.querySelector("#cursorGlow");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

stackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;

    stackButtons.forEach((item) => item.classList.remove("active"));
    stackContents.forEach((content) => content.classList.remove("active"));

    button.classList.add("active");
    document.querySelector(`#${target}`).classList.add("active");
  });
});

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  feedback.textContent = "Transmission accepted. Pesan berhasil disimulasikan.";
  messageForm.reset();

  setTimeout(() => {
    feedback.textContent = "";
  }, 3600);
});

window.addEventListener("mousemove", (event) => {
  cursorGlow.style.opacity = "1";
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

window.addEventListener("mouseleave", () => {
  cursorGlow.style.opacity = "0";
});
