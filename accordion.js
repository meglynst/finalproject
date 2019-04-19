// HAMBURGER MENU
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
			navIsOpen = true;
		} else {
			nav.style.display = "none";
			navIsOpen = false;
		}
	})
}



// STICKY NAV 

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


// ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}