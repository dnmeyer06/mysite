
$( "#slide" ).click(function() {
	$( ".gallery").css("display", "block");
	$( ".cap").css("display", "none");
	$( "#landing" ).animate({ "top": "-=80vh" }, 900).delay(400);
	$("#slide").remove();
});




var photos = {
	seattle: [
	"https://lh3.googleusercontent.com/-BWQhKet3qZk/VxWunrlfEkI/AAAAAAAAFZM/WyBLanjTBFcPPbo3X10Iu7OXS4UZV8p9ACCo/s800/DSCF1648.JPG",
	"https://lh3.googleusercontent.com/-jiNM4vBJ1R4/VxWuntJp3FI/AAAAAAAAFX0/MydosI7QZLIymuzpduOvprHTQHznfHNVQCCo/s800/DSCF1797.JPG", 
	"https://lh3.googleusercontent.com/-kNDgb74t_xk/VxWunonHVYI/AAAAAAAAFZo/0LMebf1mLIErpqp0H_4PcUUKCdB-4zHIgCCo/s800/DSCF1581.JPG",
	"https://lh3.googleusercontent.com/-a24Grenty7U/VxWunluMB7I/AAAAAAAAFYM/8wZSv9xTQFUWtFAP1MSVwLEaaB1N1l5DgCCo/s800/DSCF1727.JPG",
	"https://lh3.googleusercontent.com/-2lDdhd242DU/VxWunrTtFbI/AAAAAAAAFXM/qx0Ng0xqpvkcsPEQJLIc7ZCZ3vtZnh3gQCCo/s800/DSCF1849.JPG",
	"https://lh3.googleusercontent.com/-Op1GhrXO5pU/VxWunh10jpI/AAAAAAAAFZE/ARqNGbhl1z8UQJJhZ3mwlM_aHor76cAFQCCo/s800/DSCF1673.JPG",
	"https://lh3.googleusercontent.com/-BdSwVafDPVQ/VxWunulP7WI/AAAAAAAAFZE/9mliyNJxUnszbETI8h0uq0wYzWG-ZFmBQCCo/s800/DSCF1676.JPG",
	"https://lh3.googleusercontent.com/-ZDF1qf1Cy3w/VxWunubN7pI/AAAAAAAAFXk/Yc6GNeqqGJo9GqMGOOSaeXfoIR6FiXXkQCCo/s800/DSCF1815.JPG",
	"https://lh3.googleusercontent.com/-WdM-50yoB5g/VxWungW8h7I/AAAAAAAAFX0/c4iDpuISAukwRSfls7v7fwYTQPokXNGnQCCo/s800/DSCF1799.JPG",
	"https://lh3.googleusercontent.com/-id1BVs9ncQw/VxWunrSBhlI/AAAAAAAAFZ4/9Ufq3MRZ9CkgZ1pRrUSUfam1CkBXBq12QCCo/s800/DSCF1564.JPG",
	"https://lh3.googleusercontent.com/-Bw3WTzDgt0s/VxWunt1yqHI/AAAAAAAAFZo/G5ruEnCi2ukitVByhcV-LQbh_WyMV3kvwCCo/s800/DSCF1600.JPG",
	"https://lh3.googleusercontent.com/-yxSNUoT6T_E/VxWunq1DfQI/AAAAAAAAFZo/ux0MX_EvdWIyCq3HGzUCkvUZ3XKkQKFhgCCo/s800/DSCF1594.JPG"
	],

	colombia: [
	"https://lh3.googleusercontent.com/-8EJ33kXXqmg/V59rFgKscsI/AAAAAAAANK4/OVzGpQAPdWwGaGBVzDeDaDHX65Ssh4prwCCo/s800/DSCF0769.JPG",
	"https://lh3.googleusercontent.com/-dKET_YYbVZs/V59rFg-dkkI/AAAAAAAANK0/SmEPBVwiUDQ3KoscGAk1yZzUjyUl-r9FQCCo/s800/DSCF1049.JPG",
	"https://lh3.googleusercontent.com/-dNtFzYIREms/V59rFsw8lWI/AAAAAAAANK8/AzlVO5yxohcjkjFoqbABWNE9JzVsG91ygCCo/s800/DSCF0667.JPG",
	"https://lh3.googleusercontent.com/-XsaXehfLJBk/V59rFuatF6I/AAAAAAAANK4/EugXJBnKSxg2L70uAoVIIjU3evSDHdY4QCCo/s800/DSCF1054.JPG",
	"https://lh3.googleusercontent.com/-YP50gtmZd2I/V59rFq5gZVI/AAAAAAAANK4/YWf3o8JN7ZUbjRpExQ2jPOQe-SxNGpsLQCCo/s800/DSCF0890.JPG",
	"https://lh3.googleusercontent.com/-JfyOR4jQiLc/V59rFsTLdJI/AAAAAAAANK4/voAne8xPABEX-oGo57a6HWJf-h0AInwxgCCo/s800/DSCF0934.JPG",
	"https://lh3.googleusercontent.com/-fWCmxSZPqxs/V59rFteJZoI/AAAAAAAANK4/xBkZvzyJYOcNDO4rEX2Zv79ekdb-ZfH2QCCo/s800/DSCF1175.JPG",
	"https://lh3.googleusercontent.com/-b1sj4PssHnc/V59rFkn1ePI/AAAAAAAANK0/zKS1U6AkxBQS0bAxWI6lGw4UNPO250BtgCCo/s800/DSCF1309.JPG",
	"https://lh3.googleusercontent.com/-k4A7guw9oXk/V59rFiOAMEI/AAAAAAAANK0/TethR1xSdU8-JtPiZcbolIGyPPuR6KL2ACCo/s800/DSCF1306.JPG"
	]
}

$( ".grid-box" ).click(function() {
	$( "#landing").css("display", "none");
	$(".gallery").css("display", "none");
	$(".slideShow").css("display", "block");

	var location = $(this).data('place');
	var photosArray = photos[location];
	for (i = 0; i < photosArray.length; i++) {
		$( "#indGrid" ).append( "<div class='grid-box' id='ind'><img src=" + photosArray[i] + "></div>")
	}
});

$("#back").click(function() {
	$(".slideShow").css("display", "none")
	$("#ind").css("display", "none")
	$(".gallery").css("display", "block")
	$( "#landing").css("display", "block");
	$("#indGrid").empty();
});
