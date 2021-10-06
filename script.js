var sections = ["#about", "#committees", "#creators", "#materials", "#history", "#contact"];
var current_section = window.location.hash;

// function animate_navbar(position) {
// 	var header_outer = document.getElementById("header-outer"),
// 	header_inner = document.getElementById("header-inner");
// 	var header_outer_style = header.currentStyle || window.getComputedStyle(header_outer),
// 	header_inner_style = header_inner.currentStyle || window.getComputedStyle(header_inner);

// 	anim_rect = position.getBoundingClientRect();

// 	document.getElementById("current_navbar_selection").style.width = position.clientWidth + "px";
// 	document.getElementById("current_navbar_selection").style.marginLeft = (anim_rect.left - header_outer_style.marginLeft.replace("px", "") - header_inner_style.marginLeft.replace("px", "")) + "px";
// 	document.getElementById("current_navbar_selection").style.marginTop = anim_rect.top + "px";
// }

function goto(sender) {
	//animate_navbar(sender);
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
			appear.style.left = '50px';
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

// reset transition time after changing section or language
function changeTransition(sender) {
	sender.style.transition = "0.3s";
}

$(document).ready(function() {

	//var navbar_selection = document.getElementById("current_navbar_selection");
	//navbar_selection.style.height = "49px";

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
		document.getElementById("lang_current").textContent = "UK";
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
			document.getElementById("lang_current").textContent = "UK";

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