// Smooth scrolling
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){ 
        event.preventDefault();
        //console.log($(this));  
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

// Shrink header and img + hide text when scrolling begins
$(function(){
    $('#shade').data('size','big');
});


$(document).ready(function (){
    $(window).scroll(function(){
        if($(document).scrollTop() > 0)
        {
            if($('#shade').data('size') ==='big')
            {
                $('#shade').data('size','small');
                $('#shade').stop().animate({
                    height:'80px'
                },600);
                $('#icon').stop().animate({
                    height:'70px' /*image has the same effect like the header*/
                },600);
                $('#jrctext').fadeOut('slow', function() {
                //animation complete
    });
                $('#jrctext').stop().animate({ 
                   "top": "-110px"
               }, 800);
                $('.header').find('ul').stop().animate({
                  "margin-top": "10px"
              }, 600);
                $('#selected').stop().animate({
                  "top": "48px"
              }, 600);
            }
        }
        else
        {
            if($('#shade').data('size') === 'small')
            {
                $('#shade').data('size','big');
                $('#shade').stop().animate({
                    height:'145px'
                },600);
                $('#icon').stop().animate({
                    height:'135px' /*image has the same effect like the header*/
                },600);
                $('#jrctext').fadeIn('slow', function() {
                //animation complete
    });
                $('#jrctext').stop().animate({ 
                   "top": "10px"
               }, 800);
                $('.header').find('ul').stop().animate({
                  "margin-top": "40px"
              }, 600);
                $('#selected').stop().animate({
                  "top": "80px"
              }, 600);

            }  
        }
    }
    );


//NAVIGATION BAR ANIMATIONS

//$(function () {
//Rollover feedback on nav bar 
    $('#nav li a').hover(function() {
        //Get left position and width of current li 
        var $el = $(this);
        var leftPos = $el.position().left;
        var setWidth = $(this).width(); 
        //Style the #selected bar to match the attributes of current li 
        $('#selected').stop().animate({
            left: leftPos,
            width: setWidth
        }, 400, function() {
            $('#selected').stop().fadeIn(400);   
            });
    }, //animate callback
        function() {
            // mouseout 
            // if the window is not scrolled past the first section
            // hide the #selected bar
            if ($(window).scrollTop() < $('#about').position().top) {
             $('#selected').stop().fadeOut(400);
             window.location.hash="home";
            } //if
            // else if 
            else {
                $('#selected').stop().fadeIn(400);
           
                $('#nav li a').each(function() {
                    var url = window.location.href;
                    var urlArray = url.split('/');
                    var currentPage= urlArray[urlArray.length-1];
                    if (window.location.hash === currentPage && window.location.hash !== 'home') {
                        var origWidth = $('#selected').width();
                        var origLeft = $('#selected').position().left;
                            $('#selected').stop().animate({
                                left: origLeft,
                                width: origWidth
                            }, 400, function() {
                            //animation complete
                            $('#selected').stop().fadeIn(400);
                        }); // callback
                    } // if
                 }); //each 
                 } // else
        });// mouseout fn
// force event to fire first time
$('#nav').trigger('mouseout');



$(window).scroll(function(event) { 
    event.preventDefault();
    event.stopPropagation();
//check which sections have been scrolled past the top
$('.section').each(function() {
    if ($(window).scrollTop() < $('#about').position().top) {
        window.location.hash="home";
        //return false;
    } 
    else if ($(window).scrollTop() >= $('#about').position().top && $(window).scrollTop() < $('#team').position().top) {
        //console.log('about');
        window.location.hash="about";
        //return false;
    }
    else if ($(window).scrollTop() >= $('#team').position().top && $(window).scrollTop() > $('#about').position().top) {
        //console.log('team');
        window.location.hash="team";
         //return false;
    }
   // return false;
    // else if ($(window).scrollTop() > $(this).position().top) {
    //     var currentSection = $(this).attr('id');
    //    // $(this).data($(this).attr('id'));
    //     //get the list of sections
    //     //var currentSection = $(this).data();
    //     console.log(currentSection);
    //     // pick the last one on the list
    //     // change the window.location.hash to $(this).attr('id')
    //     window.location.hash=currentSection;
    //     return false;
    // }
}); // each fn
}); // scroll fn

// On scroll, check the hash
// Highlight the correct nav item 
$(window).scroll(function() {
    if (window.location.hash==="#home") {
        $('#selected').hide();
    }
    else if (window.location.hash==="#about") {
        var leftPos = $('#nav1').find('a').position().left;
        var setWidth = $('#nav1').find('a').width();
        $('#selected').stop().animate({
            left: leftPos,
            width: setWidth
        }, 400, function() {
            //animation complete
            //$('#selected').removeClass('hide');
            //$('#selected').show();
            $('#selected').stop().fadeIn(400);
    });
    }
    else if (window.location.hash==='#team') {
        var leftPos2 = $('#nav2').find('a').position().left;
        var setWidth2 = $('#nav2').find('a').width();
        $('#selected').stop().animate({
            left: leftPos2,
            width: setWidth2
        }, 400, function() {
            //animation complete
            $('#selected').removeClass('hide');
            $('#selected').show();
            $('#selected').stop().fadeIn(400);
    });
    }
}); // scroll fn

    // $('#selected').stop().animate({
    //     left: leftPos,
    //     width: setWidth
    // }, 400, function() {
    //     //animation complete
    //     $('#selected').removeClass('hide');
    //     $('#selected').stop().fadeIn(400);   
    //     });
 //animate callback
//}


//             // On the landing page, make red bar disappear when nav is not being hovered upon
//             if ($(window).scrollTop() < $('#about').position().top) {
//                 //console.log('made it');
//                 $('#selected').stop().fadeOut(400);
//             }
//             else {
//                 // On any other page besides the home page
//                 // Slide the bar back to the current page when nav is not being hovered upon
//                 // for each link in the nav bar:
//                 $('#nav ul li a').each(function() {

//                     // For each link in the navbar, get the pathname
//                     var $el = $(this); 
//                     var pathname= $el.attr('href').split('/');
//                     pathname = pathname[pathname.length-1];

//                     // If the pathname is the same as the page that is loaded 
//                     if (pathname === currentPage) {
//                             // Get the position of the link and center check the left position
//                             // to appropriately center the bar above it
//                             var navItemWidth = $(this).width();
//                             var barWidth = 110;
//                             var diff = barWidth - navItemWidth;
//                             var balance = diff/2;
//                             var origLeftPos= $(this).position().left - balance;
//                         // Move the bar to the correct position and then show it if its not already
//                         $('#selected').stop().animate({
//                             left: origLeftPos}, 400, function() {
//                                 //animation complete
//                                 $('#selected').removeClass('hide');
//                             });
//                     }
//                 }); 
// }
       // });// hover
// $(window).scroll(function() {
//    // event.preventDefault();
//     //event.stopPropagation();
//     if ($(window).scrollTop() > $('#about').position().top) { 
//      console.log('about');
//    // add hash
//    window.location.hash = "about"; 
//    return false;
//   // $($(this).attr('href')).fadeIn('slow');
// } else {
//     window.location.hash = "";
//     return false;
// }

// if ($(window).scrollTop() > $('#team').position().top) {
//     // add hash
//     console.log('team');
//     window.location.hash = "team";
//     return false;
// } else {
//     window.location.hash = "";
//     return false;
// }

// });

// force event to fire first time
//$('#nav').trigger('mouseout');

//}); // fn



// Only highlight one employee at a time
// Toggle on click
// Match biobox content to employee showing
$('.employee').click(function () {
        if ($(this).find('.teamshade').hasClass('show')){
             $('.employee').find('.teamshade').addClass('show');
            $(this).find('.teamshade').removeClass('show');
        }
        else {
             $('.employee').find('.teamshade').removeClass('show');
            $(this).find('.teamshade').addClass('show');
        }
        if ($('#joe').find('.teamshade').hasClass('show')) {
            $('#bryanBio').addClass('hide');
            $('#carlBio').addClass('hide');
            $('#barbBio').addClass('hide');
            $('.joeBio').removeClass('hide');
        }
        else if ($('#barbara').find('.teamshade').hasClass('show')) {
            $('.joeBio').addClass('hide');
            $('#bryanBio').addClass('hide');
            $('#carlBio').addClass('hide');
            $('#barbBio').removeClass('hide');
        }
         else if ($('#bryan').find('.teamshade').hasClass('show')) {
            $('.joeBio').addClass('hide');
            $('#carlBio').addClass('hide');
            $('#barbBio').addClass('hide');
            $('#bryanBio').removeClass('hide');
        }
        else if ($('#carl').find('.teamshade').hasClass('show')) {
            $('.joeBio').addClass('hide');
            $('#barbBio').addClass('hide');
            $('#bryanBio').addClass('hide');
            $('#carlBio').removeClass('hide');
        }
}); // click fn

$('#slider').on("scroll", function() {
    $('.slides').css({
        'background-position': $(this).scrollLeft()/50-120+ "px 0"
    });
});

var slider = {

    el: {
        slider: $('#slider'),
        allSlides: $('.slide'),
        sliderNav: $('.slider-nav'),
        allNavButtons: $('.slider-nav > a')
    },

    timing: 800,
    slideWidth: 1600,

    init: function() {
        // You can either manually scroll...
        this.el.slider.on("scroll", function(event) {
            slider.moveSlidePosition(event);
        });
        // or click a thing
        this.el.sliderNav.on('click', 'a', function(event) {
            slider.handleNavClick(event, this);
        });
    },

    moveSlidePosition: function(event) {
        // Magic Numbers
        this.el.allSlides.css({
            'background-position': $(event.target).scrollLeft()/50-120+ "px 0"
        });
    }, 

    handleNavClick: function(event, el) {
        // Don't change URL to a hash, remove if you want that
        event.preventDefault();

        // Get "1" from '#slide-1', for example
        var position = $(el).attr('href').split("-").pop();

        this.el.slider.animate({
            scrollLeft: position * this.slideWidth
        }, this.timing);

        this.changeActiveNav(el);
    }, 
    changeActiveNav: function(el) {
        //Remove active from all links
        this.el.allNavButtons.removeClass('active');
        //Add ack to the one that was pressed
        $(el).addClass('active');
    }
};
slider.init();

}); // doc ready


