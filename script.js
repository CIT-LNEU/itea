var sections = ["#about", "#committees", "#creators", "#materials", "#history", "#contact"];
var current_section = window.location.hash;

function goto(sender) {
	var next_section = sender.getAttribute("hash");
	if (window.location.hash != next_section) {
		window.location.hash = next_section;
		change_section(next_section);
	}
}

function change_section(section) {
	for (var i = 0; i < sections.length; i++) {
		if (sections[i] != section) {
			
			$(sections[i]).hide();
		}
		else {
			$(sections[i]).show();
		}
	}
	$(window).scrollTop(0);
	console.log("Switched section to", section);
}

$(document).ready(function () {

	change_section(window.location.hash);

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