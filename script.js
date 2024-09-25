const primaryNav  = document.querySelector(".primary-nav ");
const toggleMenu = document.querySelector(".toggle-menu");
const screenOnly = document.querySelector(".sr-only");

function handleMobileMenu () {
	if(toggleMenu.getAttribute("aria-expanded") === "false") {
		toggleMenu.setAttribute("aria-expanded", "true");
		primaryNav.setAttribute("aria-expanded", "true");
		screenOnly.setAttribute("aria-expanded", "true");
	}
	else {
		toggleMenu.setAttribute("aria-expanded", "false");
		primaryNav.setAttribute("aria-expanded", "false");
		screenOnly.setAttribute("aria-expanded", "false");
	}
}

toggleMenu.addEventListener("click", handleMobileMenu)