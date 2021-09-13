$(document).ready(function (){

	//Scroll the page to an related element by clicking on the menu_button

	$("#about_button").click(function(){
		$('html, body').animate({
			scrollTop: $('#about_banner').offset().top - 40
		}, 200);
	});

	$("#organizers_button").click(function(){
		$('html, body').animate({
			scrollTop: $('#organizers_banner').offset().top - 40
		}, 200);
	});

	$("#materials_button").click(function(){
		$('html, body').animate({
			scrollTop: $('#materials_banner').offset().top - 40
		}, 200);
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
	
	$('#lang_switcher').click(function() {
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

	$("#lang_switcher").mouseover(function(){
		$("#lang_current").css("transition", "0.3s");
		$("#lang_current").css("color", "white");

		$("#lang_ico").attr('src',"images/lang_icon_white.png");
		$("#lang_ico").css("transition", "0.3s");
	});

	$("#lang_switcher").mouseleave(function(){
		$("#lang_current").css("transition", "0s");
		$("#lang_current").css("color", "#1C6728");

		$("#lang_ico").attr('src',"images/lang_icon_green.png");
		$("#lang_ico").css("transition", "0s");
	});
});