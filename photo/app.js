
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
	],

	vida: [
	"https://lh3.googleusercontent.com/-1EhMqF0wx18/V6Dcsh7CmMI/AAAAAAAANQ4/ScQYCCq_qY0IndCx-yWQEiTSMC75t3X-wCCo/s800/DSCF2771.JPG",
	"https://lh3.googleusercontent.com/-CzLQfKgFDA0/V6DdLoeJGrI/AAAAAAAANRI/Lq_2-qYEaMoYU-fAoB_c5yeCj-h_iXPPQCCo/s800/DSCF2521.JPG",
	"https://lh3.googleusercontent.com/-9SYCwpAlpyM/V6DdMn11JkI/AAAAAAAANRg/sW7XNlrGXf0y2LTCzBJy2kgKoo8WHj6sACCo/s800/DSCF2532.JPG",
	"https://lh3.googleusercontent.com/-un79P49Ufro/V6Dcr56UyvI/AAAAAAAANQ4/9PVajO6TvnYk6jkaBMistZERhkCkGQM6gCCo/s800/DSCF2767.JPG",
	"https://lh3.googleusercontent.com/-JyCH7yqF51Q/V6DeVpL4Q8I/AAAAAAAANTs/bAwvmHdhYN4YtYcFHO1CUrUhkfcUJtQgACCo/s800/DSCF0066.JPG",
	"https://lh3.googleusercontent.com/-tY3NgADDbQg/V6DezoabNiI/AAAAAAAANUo/IsMW3y3dPzUh0vtVOl0Ky6wBTgEU-atuQCCo/s800/DSCF0208.JPG",
	"https://lh3.googleusercontent.com/-lP0oj0PXyu8/V6DfTA9dLcI/AAAAAAAANVY/tRU197OtNuksWOhclNQsVHIwX6VMIkkHACCo/s800/DSCF0607.JPG",
	"https://lh3.googleusercontent.com/-_w98yJcPybg/V6DfUQaI0XI/AAAAAAAANVk/o5gJIyMYwTAJ4siaga2m3EWUe23jYpEvACCo/s800/DSCF0612.JPG",
	"https://lh3.googleusercontent.com/-vV12al0WjEc/V6Dcw8HD8xI/AAAAAAAANT0/A613-749tX4nrpcGPksXdUh23UTjng3_QCCo/s800/DSCF2790.JPG"

	],

	paonia: [
	"https://lh3.googleusercontent.com/-hDYcdevC_gI/VxWUcUO8zRI/AAAAAAAANMg/v_seWw1hxXwd_MNLWF808b_qvLv6kfV6ACCo/s800/DSCF2243.JPG",
	"https://lh3.googleusercontent.com/-ILFbsnyWUDU/VxWUcY--H1I/AAAAAAAANMg/rW5fWkpqKpk6fRlHOQ29bGyR-ZmYz9zXwCCo/s800/DSCF1995.JPG",
	"https://lh3.googleusercontent.com/-AS_ByRv268c/VxWUcRTsOCI/AAAAAAAANMg/46M3xWZ2tj4eTVWf8ISVt44xuh2cB6RjACCo/s800/DSCF2002.JPG",
	"https://lh3.googleusercontent.com/-zQImwg-5a-4/VxWUcQlikQI/AAAAAAAANMg/qjiB8tHNftEDU6SpwNZCOvIZgwoPpzxawCCo/s800/DSCF2026.JPG",
	"https://lh3.googleusercontent.com/-Jbh5ApJeuTY/VxWUcUssVSI/AAAAAAAANMg/ZOJTPVjmagc5gZr-CJkwZZ3KCaPYDaP_QCCo/s800/DSCF2101.JPG",
	"https://lh3.googleusercontent.com/-5-yGdLHSP60/VxWUcdctVxI/AAAAAAAANMg/fTJ34Gge_LcA-Yp6S5hd-qfWsx3kAecpQCCo/s800/DSCF2121.JPG",
	"https://lh3.googleusercontent.com/--LQ7tgV1TuI/VxWUcV6fRRI/AAAAAAAANMg/IDNhKhFCVv0EO0ZlaQa_jNNLA38Q03GwQCCo/s800/DSCF2135.JPG",
	"https://lh3.googleusercontent.com/-_jPfAmTiImY/VxWUcew_gRI/AAAAAAAANMg/Ch_dlXNh8Bcjt0J3b3l6PZE-_ANDjGZ9ACCo/s800/DSCF2159.JPG",
	"https://lh3.googleusercontent.com/-4CA6gM0VkQg/VxWUcacJJJI/AAAAAAAANMg/1yX3cWVrz1ccSgTaUujmrO-w5XzyIAoHgCCo/s800/DSCF2170.JPG",
	"https://lh3.googleusercontent.com/-x120dsnbU5Y/VxWUcZnurmI/AAAAAAAANMg/0I_R7NbRJrct2hZNNPd7W-j5Cnl9vQVPACCo/s800/DSCF2179.JPG",
	"https://lh3.googleusercontent.com/-poJd-2Fn50Y/VxWUcYKdd4I/AAAAAAAANMg/KToiwJ0H_S4eKPxGfCv0aKAaxvMKZzqyACCo/s800/DSCF2193.JPG",
	"https://lh3.googleusercontent.com/-SKn85Az9c_8/VxWUcQArEdI/AAAAAAAANMg/M_gzqBKLDAEEmI-Od8f7qWt8ZJFcNDn7QCCo/s800/DSCF2222.JPG",
	"https://lh3.googleusercontent.com/-SBUnMrEXBvk/VxWUcZb8ceI/AAAAAAAANMg/M5YnM12uMwkhCahGdKzkTtpTaZIJSe8AgCCo/s800/DSCF2227.JPG",
	"https://lh3.googleusercontent.com/-DJ_10Rey8yg/VxWUcdm5veI/AAAAAAAANMg/XyKYQRS4hRsVWRAdvJpbnVeRphFITWsSgCCo/s800/DSCF2345.JPG"

	]
	
}

$( ".grid-box" ).click(function() {
	$( "#landing").css("display", "none");
	$(".gallery").css("display", "none");
	$(".slideShow").css("display", "block");

	var location = $(this).data('place');
	var photosArray = photos[location];
	for (i = 0; i < photosArray.length; i++) {
		$( "#indGrid" ).append( "<div class='grid-box resizableImage' id='ind'><img src=" + photosArray[i] + "></div>")
	}
});

$("#back").click(function() {
	$(".slideShow").css("display", "none")
	$("#ind").css("display", "none")
	$(".gallery").css("display", "block")
	$( "#landing").css("display", "block");
	$("#indGrid").empty();
});



$('.resizableImage').hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=10%', width: '+=10%'});
}
function returnToOriginalSize() {
    $(this).css({height: "", width: ""});
}
