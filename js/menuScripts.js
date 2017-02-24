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
