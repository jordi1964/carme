/*  Proves NO GIRAR MOBIL
========================================== */


/** Script detecció rotació **/
/* Copiat de https://davidwalsh.name/orientation-change  */

// Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if(mql.matches) {
 // Portrait orientation
 document.getElementById('nono').style.display = "block";
} else {
 // Landscape orientation
 document.getElementById('nicas').style.display = "block";
}

// Add a media query change listener
mql.addListener(function(m) {
 if(m.matches) {
   // Changed to portrait
 }
 else {
   // Changed to landscape
 }
});
