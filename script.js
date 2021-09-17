$(document).ready(function (){

	//Scroll the page to an related element by clicking on the menu_button

	$(".about_button").click(function(){
		$("#about").toggle();
	});

	$(".committees_button").click(function(){
		$("#about").toggle();
	});

	$(".creators_button").click(function(){
		$("#about").toggle();
	});

	$(".materials_button").click(function(){
		$("#about").toggle();
	});

	$(".history_button").click(function(){
		$("#about").toggle();
	});

	$(".contact_button").click(function(){
		$("#about").toggle();
	});

	//Translate the site

	if (/^uk\b/.test(navigator.language) || /^ru\b/.test(navigator.language))
	{
		$('[lang="en"]').hide();
		document.getElementById("lang_current").textContent = "UA";
		var sw = false;
	}
	else
	{
		$('[lang="ua"]').hide();
		document.getElementById("lang_current").textContent = "EN";
		var sw = true;
	}
	
	$('#lang_current').click(function() {
		$('[lang="ua"]').toggle();
		$('[lang="en"]').toggle();
		if (sw === false) {
			sw = true;
			document.getElementById("lang_current").textContent = "EN";
		}
		else {
			sw = false;
			document.getElementById("lang_current").textContent = "UA";
		}
	});
});