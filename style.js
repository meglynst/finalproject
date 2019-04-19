//BROADCAST BAR
/* Let's Build: With JavaScript - Web-Crunch.com
   Subscribe on YouTube - https://youtube.com/c/webcrunch
   
   Let's Build: Broadcast Bar with Cookie Support 
*/

var broadcast = document.querySelector('.broadcast');
var closeBroadcast = document.querySelector('.hide-broadcast-target');
var cookie = readCookie('hide_broadcast_bar');

// broadcast.style.display = "none";

if (cookie == "true") {
  broadcast.style.display = "none";
}

closeBroadcast.addEventListener('click', function(e) {
  if(cookie != "true") {
    broadcast.style.display = "none";
    createCookie('hide_broadcast_bar', "true", 7);
  } 
  e.preventDefault();
});

function createCookie(name, value, days) {
  if(days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/"
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
   
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}


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