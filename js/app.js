

$(document).ready(function(){
    $(".fade").css('opacity',0).delay(500).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade2").css('opacity',0).delay(1500).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade3").css('opacity',0).delay(2000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade4").css('opacity',0).delay(2500).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fadeNav").css('opacity',0).delay(3000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade6").css('opacity',0).delay(3500).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade7").css('opacity',0).delay(4000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade8").css('opacity',0).delay(4500).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade9").css('opacity',0).delay(5000).animate({opacity:1}, 1000);
});



$(function() {
    $(window).scroll( function(){
        
     
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 1000;  
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},3000);
                
            }
        }); 
        
    });
});






$(function() {
    // Get page title
    var pageTitle = $("title").text();

    // Change page title on blur
    $(window).blur(function() {
      $("title").text("Come back soon!");
    });

    // Change page title back on focus
    $(window).focus(function() {
      $("title").text(pageTitle);
    });
});


