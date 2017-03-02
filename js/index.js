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
      	if (openDropdown.classList.contains('show')){
        		openDropdown.classList.remove('show');
      	}
   	}
  	}
  	if (event.target.matches('.menuheaders') || event.target.matches('.articlebar')) {
	  	document.getElementById("ablinks").classList.toggle("show");
  	}else if (!event.target.matches('.menuheaders') || !event.target.matches('.articlebar')) {
		var hurr = document.getElementsByClassName("ab-content");
    	var i;
    	for (i = 0; i < hurr.length; i++) {
      	var hurri = hurr[i];
      	if (hurri.classList.contains('show')){
        		hurri.classList.remove('show');
      	}
   	}
  	}
}
  function CoachingLinks(){
  	document.getElementsByClassName('cb-content').style.toggle("show")
  }
  function articlesLinks(){
  	document.getElementsByClassName('cb-content').classList.toggle("show");
  }
  function changeHeader(){
  	var x = document.getElementById('Title');
  	if (x.innerHTML == "Millennial Lifestyle Guide")
  	{
  		x.innerHTML = "BAM";
  	}
  	else{
  		x.innerHTML = "Millennial Lifestyle Guide";
  	}
	}
  function openLinks(){

  	var hi = document.getElementById('devP');
  	}
