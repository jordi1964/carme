/*  Proves NO GIRAR MOBIL
========================================== */


2
3
	
window.addEventListener("orientationchange", function() {
    alert("Orientation angle is " + screen.orientation.angle);
});


/** Script detecció rotació **/
/* Copiat de https://davidwalsh.name/orientation-change */

// Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if(mql.matches) {
 // Portrait orientation
 function() {
   document.getElementById('nono').style.display = "block";
 }
} else {
 // Landscape orientation
 function() {
   document.getElementById('nicas').style.display = "block";
 }
}

// Add a media query change listener
mql.addListener(function(m) {
 if(m.matches) {
   // Changed to portrait
   function() {
     document.getElementById('brrt').style.display = "block";
   }
 }
 else {
   // Changed to landscape
 }
});



/* Script copiat de w3schools -> https://www.w3schools.com/jsref/met_win_matchmedia.asp


function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById('nono').style.display = "block";
  } else {
    document.getElementById('nicas').style.display = "block";
  }
}

var x = window.matchMedia("(orientation: portrait)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

*/
