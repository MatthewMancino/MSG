/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Event handler for click
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function coachingLinks() {
	document.getElementsByClassName("cb-content").classList.toggle("show");

}
/*window.onclick = function(event) {
	if (!event.target.matches('.articlebar')) {

		var coachingLinks = document.getElementsByClassName("coachingbar");
		var i; //instantiator
		for (i = 0; i < coachingLinks.length; i++){
			var openDroop = coachingLinks[i];
			if (openDropdown.classList.contains('show'))
	}
}*/
