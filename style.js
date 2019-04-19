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



// MODAL POPUP
// function myModalPls() {
// // Get the modal
// var mymodal = document.getElementById('myModal');

// // Get the button that opens the modal
// var mybtn = document.getElementById("modalBtn");

// // Get the <span> element that closes the modal
// var myspan = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// mybtn.onclick = function() {
//   mymodal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// myspan.onclick = function() {
//   mymodal.style.display = "none";
// }
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == mymodal) {
//     mymodal.style.display = "none";
//   }
// }



// // source from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_matchmedia
// var x = window.matchMedia("(max-width: 320px)")
// myStickyNav(x) // Call listener function at run time
// x.addListener(myStickyNav) // Attach listener function on state changes