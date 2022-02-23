jQuery(document).ready(function () {
	jQuery(".owl-carousel").owlCarousel({
		margin: 5,
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
		items: 3,
	});
	jQuery(".menu-bar").click(function () {
		jQuery(".news-feed-menu").slideToggle(1500);
	});
	jQuery(window).resize(function () {
		var screenWidth = jQuery(window).width();
		if (screenWidth > 768) {
			jQuery(".news-feed-menu").removeAttr("style");
		}
	});
	jQuery(".emojione").emojioneArea();
	jQuery(".post-reaction .react").hover(function () {
		jQuery(".reactions").fadeToggle(500);
	});
	jQuery(".post-reaction .reactions").hover(function () {
		jQuery(".reactions").css("display", "block");
	});
	$(".menu-workshop").click(function (event) {
		if (event.target.matches(".doNotHide")) return;
		hideAllMenu("workshop-option");
		$(".workshop-option").toggle();
	});
	$(".menu-message").click(function (event) {
		if (event.target.matches(".doNotHide")) return;
		hideAllMenu("message-option");
		$(".message-option").toggle();
	});
	$(".menu-notification").click(function (event) {
		if (event.target.matches(".doNotHide")) return;
		hideAllMenu("notification-option");
		$(".notification-option").toggle();
	});
	jQuery(".profile").click(function () {
		hideAllMenu("profile-show");
		jQuery(".profile-show").toggle();
	});
	jQuery(".reaction-sender-btn-click").click(function () {
		jQuery(".reaction-sender").toggle();
	});
	jQuery(".reaction-receiver-btn-click").click(function () {
		jQuery(".reaction-receiver").toggle();
	});

	// Dark Theme
	$("#flexSwitchCheckDefault").change(function () {
		if ($(this).is(":checked")) {
			$("#darkcss").attr("href", "assets/css/dark.min.css");
		} else {
			$("#darkcss").attr("href", "");
		}
	});

	// Close the dropdown if the user clicks outside of it
	window.onclick = function (event) {
		if (!event.target.matches(".menu-btn") && !event.target.matches(".doNotHide")) {
			hideAllMenu();
		}
	};
});

function hideAllMenu(cls) {
	var dropdowns = document.getElementsByClassName("dropdown-body");
	for (var i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains(cls)) continue;
		if (openDropdown.style.display == "block") {
			openDropdown.style.display = "none";
		}
	}
}
