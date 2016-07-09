$(document).ready(function(){
    $(".fade").hide(0).delay(500).fadeIn(3000)
});

$(document).ready(function(){
    $(".fadeSub").hide(0).delay(3500).fadeIn(3000)
});

$(document).ready(function(){
    $(".fadeSub2").hide(0).delay(4000).fadeIn(3000)
});

$(document).ready(function(){
    $(".fadeMenu").hide(0).delay(6000).fadeIn(3000)
});

$(document).ready(function(){
    $(".fadeDesc").hide(0).delay(8000).fadeIn(3000)
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
      $("title").text("Yeah, that's what we thought...");
    });

    // Change page title back on focus
    $(window).focus(function() {
      $("title").text(pageTitle);
    });
});