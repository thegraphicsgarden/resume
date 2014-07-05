// JavaScript Document
(function(e){
	//Primary Nav XS Behavior
	var collapsed = true;
	$collapseBtn = $("a#collapsed-menu");
	$primaryNavXS = $("#primary-nav-xs");

	//clicked on menu button
	$collapseBtn.click(function() {
		if (collapsed) {
			$primaryNavXS.css({ 
				display: "block",
				top: 80
			});

		} else {
			$primaryNavXS.hide();
		}
		collapsed = !collapsed;
	});
	$primaryNavXS.find("a").click(function() {
		$primaryNavXS.hide();
		collapsed = !collapsed;
	});
	$(".container").click(function() {
		/*if(!collapsed) {
			console.log("container");
			$primaryNavXS.hide();
			collapsed = !collapsed;
		}*/
	});

	//Primary Nav Behavior
	var logo = $("a#logo");
	$primaryNav = $("#primary-nav");
	$primaryNavLinks = $primaryNav.find("a");

	$primaryNavLinks.add(logo).click(function() {
		$primaryNav.add(logo).find(".active").removeClass("active");
		$(this).addClass("active");
	});

	//Setup & Resize
	$(document).ready(function() {	
		console.log("$");
	});
	$(window).resize(function() {
		if(!collapsed && $("#primary-nav").is(":visible")) {
			$primaryNavXS.hide();
			collapsed = !collapsed;
		}
	});
})(jQuery);