function hamburgerNav() {
	var hamburger = document.getElementById("hamburger-icon");
	const nav = document.getElementById("myNav");

	if (nav.style.display == "block") {
		navIsOpen = false;
	} else {
		navIsOpen = true;
	}
	console.log(navIsOpen)
	hamburger.addEventListener("click",function(e) {
		// console.log(e.target)
		if (navIsOpen) {
			nav.style.display = "block";
			navIsOpen = false;
		} else {
			nav.style.display = "none";
			navIsOpen = true;
		}
	})
}

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myStickyNav()};

// Get the navbar

var navbar = document.querySelector("#myNav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myStickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// source from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_matchmedia
var x = window.matchMedia("(max-width: 320px)")
myStickyNav(x) // Call listener function at run time
x.addListener(myStickyNav) // Attach listener function on state changes