

$(document).ready(function(){
    $(".fade").css('opacity',0).delay(1000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade2").css('opacity',0).delay(2000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade3").css('opacity',0).delay(3000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade4").css('opacity',0).delay(4000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fadeNav").css('opacity',0).delay(5000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade6").css('opacity',0).delay(6000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade7").css('opacity',0).delay(7000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade8").css('opacity',0).delay(8000).animate({opacity:1}, 1000);
});

$(document).ready(function(){
    $(".fade9").css('opacity',0).delay(5000).animate({opacity:1}, 1000);
});


jQuery(document).ready(function() {
    jQuery('.postLeft').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 50
       });
});

jQuery(document).ready(function() {
    jQuery('.postDown').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
       });
});

jQuery(document).ready(function() {
    jQuery('.postRight').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 50
       });
});



/*$(function() {
    $(window).scroll( function(){
        
     
        $('.fadeInBlock').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
             Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  
            bottom_of_window = bottom_of_window + 1000;  
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},3000);
                
            }
        }); 
        
    });
});*/


/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );



function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 100,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header,"scroll");
        } else {
            if (classie.has(header,"scroll")) {
                classie.remove(header,"scroll");
            }
        }
    });
}
window.onload = init();



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




// Code to hide elements and display other on click

// <img id="clickMeId" onclick="show('comment'); hide('clickMeId')" alt="click me">

// <div id="comment" style="display:none;"> yada yada </div>

// <script>
//   function show (toBlock){
//     setDisplay(toBlock, 'block');
//   }
//   function hide (toNone) {
//     setDisplay(toNone, 'none');
//   }
//   function setDisplay (target, str) {
//     document.getElementById(target).style.display = str;
//   }
// </script>
