$(document).ready(function (){

	//Scroll the page to an related element by clicking on the menu_button

	$("#about_button").click(function(){
		$('html, body').animate({
			scrollTop: $('#about_banner').offset().top
		}, 200);
	});

	$("#organizers_button").click(function(){
		$('html, body').animate({
			scrollTop: $('#organizers_banner').offset().top
		}, 200);
	});

	$("#materials_button").click(function(){
		$('html, body').animate({
			scrollTop: $('#materials_banner').offset().top
		}, 200);
	});

	//Translate the site

	$('[lang="ua"]').hide();
	var sw = 0;
	$('#lang_switcher').click(function() {
		$('[lang="ua"]').toggle();
		$('[lang="en"]').toggle();
		if (sw === 0) {
			sw = 1;
			document.getElementById("lang_current").textContent = "UKR";
		}
		else {
			sw = 0;
			document.getElementById("lang_current").textContent = "ENG";
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
		$("#lang_current").css("color", "#009E2D");

		$("#lang_ico").attr('src',"images/lang_icon_green.png");
		$("#lang_ico").css("transition", "0s");
	});
});