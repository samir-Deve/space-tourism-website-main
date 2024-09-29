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


/* ========== */
/* Destintion */
/* ========== */
const desLinks = document.querySelectorAll(".des-options li");
const desImgCont = document.querySelector(".des-img-cont");
const bigHeader = document.querySelector(".big-header");
const textInfo = document.querySelector(".text-info");
const aveDestance = document.querySelector(".ave-destance");
const estTravelTime = document.querySelector(".est-travel-time");

let planetData = undefined;

/* Fetches Json data */
async function fetchPlanetData() {
	try {
		const resp = await fetch("data.json")
		
		if(!resp.ok) {
			throw Error("Something is wrong with " + resp.statusText)
		}
		const data = await resp.json();
		planetData = data;
		console.log(data)
	} catch (error) {
		console.error("Something is wrong with the fetch operation:", error)
	}
}

fetchPlanetData()



desLinks.forEach((link) => {
	link.addEventListener("click", (e) =>{
		e.preventDefault();

		/* removes all undlines from all links before adding to the selected */
		desLinks.forEach(eachLink => {
			eachLink.classList.remove("des-option-underline");
		});

		/* adds undeline to the selected link */
		link.classList.add("des-option-underline");

		if(link.id === "moon") {
			desImgCont.innerHTML = `<img src="${planetData.destinations[0].images.png}" alt="planet image">`;
			/* adds corresponding name to the selected planet */
			bigHeader.innerHTML = "Moon";
			/* adds corresponding description to the selected planet */
			textInfo.innerHTML = planetData.destinations[0].description;
			/* adds corresponding distance and travel time */
			aveDestance.innerHTML = planetData.destinations[0].distance;
			estTravelTime.innerHTML = planetData.destinations[0].travel;
		}
		else if(link.id === "mars") {
			desImgCont.innerHTML = `<img src="${planetData.destinations[1].images.png}" alt="planet image">`;
			/* adds corresponding name to the selected planet */
			bigHeader.innerHTML = "Mars";
			/* adds corresponding description to the selected planet */
			textInfo.innerHTML = planetData.destinations[1].description;
			/* adds corresponding distance and travel time */
			aveDestance.innerHTML = planetData.destinations[1].distance;
			estTravelTime.innerHTML = planetData.destinations[1].travel;

		}
		else if(link.id === "europa") {
			desImgCont.innerHTML = `<img src="${planetData.destinations[2].images.png}" alt="planet image">`;
			/* adds corresponding name to the selected planet */
			bigHeader.innerHTML = "Europa";
			/* adds corresponding description to the selected planet */
			textInfo.innerHTML = planetData.destinations[2].description;
			/* adds corresponding distance and travel time */
			aveDestance.innerHTML = planetData.destinations[2].distance;
			estTravelTime.innerHTML = planetData.destinations[2].travel;
		}
		else if(link.id === "titan") {
			desImgCont.innerHTML = `<img src="${planetData.destinations[3].images.png}" alt="planet image">`;
			/* adds corresponding name to the selected planet */
			bigHeader.innerHTML = "Titan";
			/* adds corresponding description to the selected planet */
			textInfo.innerHTML = planetData.destinations[3].description;
			/* adds corresponding distance and travel time */
			aveDestance.innerHTML = planetData.destinations[3].distance;
			estTravelTime.innerHTML = planetData.destinations[3].travel;
		}
	})
});

/* ========== */
/* Crew */
/* ========== */

const crewBtns = document.querySelectorAll(".dot-indicators button");
const crewImgCont = document.querySelector(".crew-img-cont");
const crewRole = document.querySelector(".role");
const crewName = document.querySelector(".crew-name");
const textInfoJs = document.querySelector(".text-info-js");

crewBtns.forEach( crew => {
	crew.addEventListener("click", () => {
		crewBtns.forEach((eachBtn) => {
			eachBtn.setAttribute("aria-selected", "false")
			eachBtn.classList.remove("dot-on")
		})
		console.log(crew.id)
		handleCrew(crew)
	})
})

function handleCrew(crew) {
	if(crew.id === "commander") {
		crewRole.innerHTML = planetData.crew[0].role;
		crewName.innerHTML = planetData.crew[0].name;
		textInfoJs.innerHTML = planetData.crew[0].bio;
		crewImgCont.innerHTML = `<img src="${planetData.crew[0].images.png}" alt="Crew member image">`;
		crew.classList.add("dot-on")
		crew.setAttribute("aria-selected", "true")
	}
	else if(crew.id === "specialis") {
		crewRole.innerHTML = planetData.crew[1].role;
		crewName.innerHTML = planetData.crew[1].name;
		textInfoJs.innerHTML = planetData.crew[1].bio;
		crewImgCont.innerHTML = `<img src="${planetData.crew[1].images.png}" alt="Crew member image">`;
		crew.classList.add("dot-on")
		crew.setAttribute("aria-selected", "true")
	}
	else if(crew.id === "pilot") {
		crewRole.innerHTML = planetData.crew[2].role;
		crewName.innerHTML = planetData.crew[2].name;
		textInfoJs.innerHTML = planetData.crew[2].bio;
		crewImgCont.innerHTML = `<img src="${planetData.crew[2].images.png}" alt="Crew member image">`;
		crew.classList.add("dot-on")
		crew.setAttribute("aria-selected", "true")
	}
	else {
		crewRole.innerHTML = planetData.crew[3].role;
		crewName.innerHTML = planetData.crew[3].name;
		textInfoJs.innerHTML = planetData.crew[3].bio;
		crewImgCont.innerHTML = `<img src="${planetData.crew[3].images.png}" alt="Crew member image">`;
		crew.classList.add("dot-on")
		crew.setAttribute("aria-selected", "true")
	}
}

/* ================= */
/* technology styles */
/* ================= */

const techImgCont = document.querySelector(".tech-img-cont");
const numberedDots = document.querySelectorAll(".numbered-dots .numbered-dot");
const terminology = document.querySelector(".terminology ");
const techName = document.querySelector(".tech-name");
const techInfo = document.querySelector(".tech-info-js");
let selectedTechNumb = 0;

function handleTechSlides(btn) {
	if(btn.id === "1"){
		techName.innerHTML = planetData.technology[0].name;
		techInfo.innerHTML = planetData.technology[0].description;
		selectedTechNumb = 0
		handleTechImgDeviceSize()
	}
	else if(btn.id === "2"){
		techName.innerHTML = planetData.technology[1].name;
		techInfo.innerHTML = planetData.technology[1].description;
		selectedTechNumb = 1
		handleTechImgDeviceSize()
	}
	else if(btn.id === "3"){
		techName.innerHTML = planetData.technology[2].name;
		techInfo.innerHTML = planetData.technology[2].description;
		selectedTechNumb = 2
		handleTechImgDeviceSize()
	}
}

numberedDots.forEach(eachBtn =>{
	eachBtn.addEventListener("click", () =>{
		numberedDots.forEach(btn => {
			btn.classList.remove("is-on")
		})
		handleTechSlides(eachBtn)
		eachBtn.classList.add("is-on")
		console.log(typeof eachBtn.id)
	})
})


/* sets the corresponding technology image */
function handleTechImgDeviceSize() {
	if(window.innerWidth > 560 && window.innerWidth < 720) {
		techImgCont.innerHTML = `
		<img src="${planetData.technology[selectedTechNumb].images.landscape}" alt="technology image">`;
	}
	else {
			techImgCont.innerHTML = `
			<img src="${planetData.technology[selectedTechNumb].images.portrait}" alt="technology image">`;
	}
}

setTimeout(() => {
	handleTechImgDeviceSize()
}, 500)

window.addEventListener("resize", handleTechImgDeviceSize)
/* if opended with tablet, sets the corresponding technology image  */
handleTechImgDeviceSize()