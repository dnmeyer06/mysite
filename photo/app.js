
$( "#slide" ).click(function() {
	$( ".gallery").css("display", "block");
	$( ".cap").css("display", "none");
	$( "#landing" ).animate({ "top": "-=80vh" }, 900).delay(400);
});