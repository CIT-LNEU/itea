var sections = ["#about", "#workshop", "#committees", "#creators", "#materials", "#history", "#contact"];
var current_section = window.location.hash;
var reset_buffer;

function goto(sender) {
	var next_section = sender.getAttribute("hash");
	if (window.location.hash != next_section) {
		change_section(next_section, true);
		color_active_button(sender, next_section)
	}
}

function color_active_button(sender, next_section) {
	sender.style.transition = "0.8s"
	sender.style.backgroundColor = "#1C6728";
	sender.style.color = "white";
	for (var i = 0; i < reset_buffer.length; i++) {
		if (reset_buffer[i].getAttribute("hash") === next_section) {
			continue;
		}
		reset_buffer[i].style.transition = "0.8s"
		reset_buffer[i].style.backgroundColor = "transparent";
		reset_buffer[i].style.color = "#1C6728";
	}
};

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
	reset_buffer = document.querySelectorAll('#header-inner li');
	var overlay = document.querySelector('#header_selection_overlay');
	var header = document.querySelector('#header-inner');
	overlay.innerHTML = header.innerHTML;
	$(overlay).hide();

	lang_list = [];
	lang_list[0] = document.querySelectorAll('[lang=en]');
	lang_list[1] = document.querySelectorAll('[lang=ua]');
	console.log(lang_list)
	
	var start_page;
	
	if (window.location.hash === '') {
		change_section("#about", false);
		start_page = true; 
	}
	else {
		change_section(window.location.hash);
		start_page = false;
	}

	//Translate the site

	if (/^uk\b/.test(navigator.language) || /^ru\b/.test(navigator.language))
	{
		$('[lang="en"]').hide();
		document.getElementById("lang_current").textContent = "UK";
		var sw = false;
		if (start_page) {
			current_button = document.querySelector('[hash="#about"][lang="ua"]');
			console.log(current_button)
			color_active_button(current_button, "#about")
		}
		else {
			current_button = document.querySelector(`[hash="${window.location.hash}"][lang="ua"]`)
			console.log(current_button)
			color_active_button(current_button, window.location.hash)
		}
	}
	else
	{
		$('[lang="ua"]').hide();
		document.getElementById("lang_current").textContent = "EN";
		var sw = true;
		if (start_page) {
			current_button = document.querySelector('[hash="#about"][lang="en"]');
			console.log(current_button)
			color_active_button(current_button, "#about")
		}
		else {
			current_button = document.querySelector(`[hash="${window.location.hash}"][lang="en"]`)
			console.log(current_button)
			color_active_button(current_button, window.location.hash)
		}
	}

	$('#lang_current').click(function() {

		if (sw === false) {
			sw = true;
			document.getElementById("lang_current").textContent = "EN";

			for (var i = 0; i < lang_list[1].length; i++) {
				$(lang_list[1][i]).hide();
			}
			current_button = document.querySelector(`[hash="${window.location.hash}"][lang="en"]`)
			color_active_button(current_button, window.location.hash)
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
			current_button = document.querySelector(`[hash="${window.location.hash}"][lang="ua"]`)
			color_active_button(current_button, window.location.hash)
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