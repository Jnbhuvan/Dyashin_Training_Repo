const menuButton = document.querySelector('[aria-label="Open menu"]');
const mobileMenu = menuButton.parentElement.nextElementSibling;

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
