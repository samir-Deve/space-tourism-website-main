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