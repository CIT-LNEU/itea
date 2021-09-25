var sections = ["#about", "#committees", "#creators", "#materials", "#history", "#contact"];
var current_section = window.location.hash;

function goto(sender) {
	var next_section = sender.getAttribute("hash");
	if (window.location.hash != next_section) {
		change_section(next_section, true);
	}
}

function change_section(section, animate) {
	window.location.hash = section;
	for (var i = 0; i < sections.length; i++) {
		if (sections[i] != section) {
			$(sections[i]).hide();
		}
		else if (animate) {
			var appear = document.getElementById(sections[i].replace('#', ''));
			appear.style.opacity = '0';
			appear.style.left = '100px';
			$(sections[i]).show();
			appear.style.transition = '1s';
			appear.style.position = 'relative';
			appear.style.left = '0';
			appear.style.opacity = '1';
			
		}
		else {
			$(sections[i]).show();
		}
	}
	$(window).scrollTop(0);
}

function changeTransition(sender) {
	sender.style.transition = "0.3s";
}

$(document).ready(function() {

	lang_list = [];
	lang_list[0] = document.querySelectorAll('[lang=en]');
	lang_list[1] = document.querySelectorAll('[lang=ua]');

	if (window.location.hash === '') {
		change_section("#about", false);
	}
	else {
	  change_section(window.location.hash);
	}

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

		if (sw === false) {
			sw = true;
			document.getElementById("lang_current").textContent = "EN";

			for (var i = 0; i < lang_list[1].length; i++) {
				$(lang_list[1][i]).hide();
			}
			for (var i = 0; i < lang_list[0].length; i++) {
				lang_list[0][i].style.opacity = '0';
				lang_list[0][i].style.left = '50px';
				$(lang_list[0][i]).show();
				lang_list[0][i].style.transition = '1s';
				lang_list[0][i].style.position = 'relative';
				lang_list[0][i].style.left = '0';
				lang_list[0][i].style.opacity = '1';
			}
		}
		else {
			sw = false;
			document.getElementById("lang_current").textContent = "UA";

			for (var i = 0; i < lang_list[0].length; i++) {
				$(lang_list[0][i]).hide();
			}
			for (var i = 0; i < lang_list[1].length; i++) {
				lang_list[1][i].style.opacity = '0';
				lang_list[1][i].style.left = '50px';
				$(lang_list[1][i]).show();
				lang_list[1][i].style.transition = '1s';
				lang_list[1][i].style.position = 'relative';
				lang_list[1][i].style.left = '0';
				lang_list[1][i].style.opacity = '1';
			}
		}
	});
});