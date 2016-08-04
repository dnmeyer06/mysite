
$( "#slide" ).click(function() {
	$( ".gallery").css("display", "block");
	$( ".cap").css("display", "none");
	$( "#landing" ).animate({ "top": "-=80vh" }, 900).delay(400);
	$("#slide").remove();
});




var photos = {
	seattle: [
	"https://lh3.googleusercontent.com/-id1BVs9ncQw/VxWunrSBhlI/AAAAAAAANOQ/Sn_bg2yNlk4gf18YoIBIaPp3DHAyUmCFACCo/s800/DSCF1564.JPG",
	"https://lh3.googleusercontent.com/-OZs7f53WtfQ/VxWunrUDBGI/AAAAAAAANOQ/KVc-mcDICmUBAOcZtmjIYQQPyjyiKiF8wCCo/s800/DSCF1577.JPG", 
	"https://lh3.googleusercontent.com/-kNDgb74t_xk/VxWunonHVYI/AAAAAAAANOQ/JRvAGwPlHFEgnUzVMV3FUTfeO1XyLSe4wCCo/s800/DSCF1581.JPG",
	"https://lh3.googleusercontent.com/-yxSNUoT6T_E/VxWunq1DfQI/AAAAAAAANOQ/mX_BLLeh7BA2L-tVnVOFnaZzgNDk8vZnACCo/s800/DSCF1594.JPG",
	"https://lh3.googleusercontent.com/-Bw3WTzDgt0s/VxWunt1yqHI/AAAAAAAANOQ/oVoLmaZYVFYbikDORurKgLASbC-NuN9hwCCo/s800/DSCF1600.JPG",
	"https://lh3.googleusercontent.com/-AQLzljF4yXU/VxWuni3InUI/AAAAAAAANOQ/PUJ8no4Bh9cDiZ1b3ikP6uaC0PcwLkSxgCCo/s800/DSCF1669.JPG",
	"https://lh3.googleusercontent.com/-BdSwVafDPVQ/VxWunulP7WI/AAAAAAAANOQ/8oiNJ25mvyEssdoJNf4WdUXlxyjDhZDWwCCo/s800/DSCF1676.JPG",
	"https://lh3.googleusercontent.com/-Xuzd6B8wGvM/VxWuniINQgI/AAAAAAAANOQ/YKGj30kvSaoJF9FYhhxYMiSdwAYgFFFOACCo/s800/DSCF1759.JPG",
	"https://lh3.googleusercontent.com/-Um461YfL_yM/VxWunuUlEaI/AAAAAAAANOQ/khPSV9-TcDYcgToeWwfvjwpk6u6eI-cIACCo/s800/DSCF1794.JPG",
	"https://lh3.googleusercontent.com/-merH2FrLJlQ/VxWunmQkWHI/AAAAAAAANOQ/u2uKfSfhfOA-dPz7paRaK0NTAzJV0sAbACCo/s800/DSCF1810.JPG",
	"https://lh3.googleusercontent.com/-ZDF1qf1Cy3w/VxWunubN7pI/AAAAAAAANOQ/FmDBbDMPR8IUnGB_kbDklqwDLEEtoDMcwCCo/s800/DSCF1815.JPG",
	"https://lh3.googleusercontent.com/-Yiac7UnhUY4/VxWunrrFYvI/AAAAAAAANOQ/YtYCzG7dTAU6qqAs-OfsFUabaJuKUQNAgCCo/s800/DSCF1844.JPG",
	"https://lh3.googleusercontent.com/-6HjK6uU_J2I/VxWunvIQYuI/AAAAAAAANOQ/zTMwFoL2I4cRaX24evG6Bq2B70Cyu-VpwCCo/s800/DSCF1881.JPG"
	],

	colombia: [
	"https://lh3.googleusercontent.com/-mHosGtlHK10/V59rFk74IdI/AAAAAAAANOM/8PHsBX0NOJMc7rMGcJeuExKN5MQqEpcCQCCo/s800/DSCF1050.JPG",
	"https://lh3.googleusercontent.com/-eqWh522oYio/V59rFnfdkII/AAAAAAAANOM/Vzb_kTEQQjgLHgzAwyQoK69ufOL7ma4hACCo/s800/DSCF0663.JPG",
	"https://lh3.googleusercontent.com/-Nr4huPX063A/V59rFlGtd1I/AAAAAAAANOM/Lo6yVcHsfmYFDwmHQFTcxjR9AzuV--AOgCCo/s800/DSCF0670.JPG",
	"https://lh3.googleusercontent.com/-7YmAKrju8QY/V59rFg4JegI/AAAAAAAANOM/-E_QA9v_azwk53wtfxSN5kR8fFa2aguzgCCo/s800/DSCF0686.JPG",
	"https://lh3.googleusercontent.com/-HePbVaqs7Iw/V59rFqOi_DI/AAAAAAAANOM/iuXSJJ6GaNskiFmvFz90MvLDgmcdRpxZACCo/s800/DSCF0684.JPG",
	"https://lh3.googleusercontent.com/-fIrK7uhvLC4/V59rFg0VvBI/AAAAAAAANOM/z6AOz3xN0cUIge5tXqSZNFr8ZDaCCiLxgCCo/s800/DSCF1059.JPG",
	"https://lh3.googleusercontent.com/-8EJ33kXXqmg/V59rFgKscsI/AAAAAAAANOM/5xx4OpUNBLUBpjpJMmmGPEX2O0fDL8ReACCo/s800/DSCF0769.JPG",
	"https://lh3.googleusercontent.com/-XsaXehfLJBk/V59rFuatF6I/AAAAAAAANOM/3gNRbOF6J0wEU_FeJjwumMgpnyC_u_CRQCCo/s800/DSCF1054.JPG",
	"https://lh3.googleusercontent.com/-trlvjKh4JnQ/V59rFtjj45I/AAAAAAAANOM/KXHGRnZAcIAOxHHGWZ7OSccYd6hn5iL_gCCo/s800/DSCF0887.JPG",
	"https://lh3.googleusercontent.com/-BdBCLd7FLz4/V59rFik8mtI/AAAAAAAANOM/aoX21bAAIgIkdDyqPuVoZcx0auM5mkMWACCo/s800/DSCF0897.JPG",
	"https://lh3.googleusercontent.com/-JfyOR4jQiLc/V59rFsTLdJI/AAAAAAAANOM/dMYt0vou5A4FeD2ozveAV1AFI6G0BxM4ACCo/s800/DSCF0934.JPG",
	"https://lh3.googleusercontent.com/-k4A7guw9oXk/V59rFiOAMEI/AAAAAAAANOM/6p5EgctUUXs8-Yj_Tl26P95SJ4Hy4QUZQCCo/s800/DSCF1306.JPG",
	"https://lh3.googleusercontent.com/-b1sj4PssHnc/V59rFkn1ePI/AAAAAAAANOM/nJwemyb8Mzsw1xpNVu2RjWZG5RpSMTuOgCCo/s800/DSCF1309.JPG",
	"https://lh3.googleusercontent.com/-fWCmxSZPqxs/V59rFteJZoI/AAAAAAAANOM/i3CbpXo4Vps32-RBONgHJ0Qd2v1z-9hQgCCo/s800/DSCF1175.JPG"
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
