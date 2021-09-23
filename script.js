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
		else {
			var appear = document.getElementById(sections[i].replace('#', ''));
			appear.style.opacity = '0';
			$(sections[i]).show();
			if (animate) {
				appear.style.transition = '1s';
			}
			appear.style.opacity = '1';
		}
	}
	$(window).scrollTop(0);
	console.log("Switched section to", section);
}

$(document).ready(function () {

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