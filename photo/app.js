
$( "#slide" ).click(function() {
	$( ".gallery").css("display", "block");
	$( "#landing" ).animate({ "top": "-=80vh" }, 900).delay(400);
});