$(document).ready(function() {
    // Smooth scrolling
  $(".scroll").click(function(event){ 
        event.preventDefault();
        //console.log($(this));  
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

return false;
    // When the contact link is clicked load the popup box

        $('#nav4').click( function() {  
            loadPopupBox();
        });
        
        $('#popupBoxClose').click( function() {            
            unloadPopupBox();
        });
        
        $('#content').click( function() {
            unloadPopupBox();
        });

        function unloadPopupBox() {    // TO Unload the Popupbox
            $('#popupBox').fadeOut("slow");
            $("#content").css({ // this is just for style        
                "opacity": "1"  
            }); 
        }    
        function loadPopupBox() {    // To Load the Popupbox
                $('#popupBox').fadeIn("slow");
                $("#content").css({ // this is just for style
                    "opacity": "0.4"  
                });         
            }  
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
            width: setWidth,
        }, 400, function() {
            $('#selected').stop().fadeIn(400);   
            });
    }, //animate callback
        function() {
            // mouseout 
            // if the window is not scrolled past the first section
            // hide the #selected bar
            if ($(document).scrollTop() === 0) {
                $('#selected').css({'top' : '78' + 'px'});
            }
            if ($(window).scrollTop() < $('#about').position().top) {
             $('#selected').stop().fadeOut(400);
             window.location.hash="home";
            } //if
            // else if 
            else {
                $('#selected').removeClass('hide');
               $('#selected').css({'top' : '48' + 'px'});
                // slide the bar back to current page when not being hovered upon
                $('#nav li a').each(function() {
                    var $el = $(this); 
                    var pathname= $el.attr('href');
                    pathname = pathname.split('/');
                    pathname = pathname[pathname.length-1];

                    var url = window.location.href;
                    var urlArray = url.split('/');
                    var currentPage= urlArray[urlArray.length-1];
                    //var offset = $('#nav li a').position().top + 21; // height of a
                    if (pathname === currentPage && window.location.hash !== 'home') {
                        var origWidth = $(this).width();
                        var origLeft = $(this).position().left;
                           // $('#selected').css({'top': offset + 'px'});
                            $('#selected').stop().animate({
                                left: origLeft,
                                width: origWidth,
                            }, 400, function() {
                            //animation complete
                            $('#selected').removeClass('hide');
                            //$('#selected').css({'display': 'block'});
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
$('.section').each(function(event) {
    //event.preventDefault();
   // event.stopPropagation();
    if ($(window).scrollTop() < $('#about').position().top) {
        window.location.hash="home";
        return false;
    } 
    else if ($(window).scrollTop() >= $('#about').position().top && $(window).scrollTop() < $('#team').position().top) {
        //console.log('about');
        window.location.hash="about";
        return false;
    }
    else if ($(window).scrollTop() >= $('#team').position().top && $(window).scrollTop() > $('#about').position().top) {
        //console.log('team');
        window.location.hash="team";
         return false;
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



//On scroll, check the hash
//Highlight the correct nav item 
$(window).scroll(function() {
     $('#selected').css({'top' : '48' + 'px'});

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




// Only highlight one employee at a time
// Toggle on click
// Match biobox content to employee showing

$('.employee').click(function () {
    // if an employee is showing when clicked
        if ($(this).find('.teamshade').hasClass('show')){
            // Do nothing
            // $('.employee').find('.teamshade').addClass('show');
           // $(this).find('.teamshade').removeClass('show');
        }
        else {
            $('.employee').find('.teamshade').removeClass('show');
            $(this).find('.teamshade').addClass('show');
        }
        if ($('#joe').find('.teamshade').hasClass('show')) {
            $('#bryanBio').fadeOut(200);
            $('#carlBio').fadeOut(200);
            $('#barbBio').fadeOut(200);
            $('.joeBio').delay(200).fadeIn(200);
            $('.employee').find('h2').removeClass('highlight');
            if ($('#joe').find('h2').hasClass('highlight') === false) {
                $('#joe').find('h2').addClass('highlight');
            }

                // More button fn on Joe Team page
                $('.moreButton').click(function() {
                    $('#joep2').removeClass('hide');
                    $('#joep2').show();
                    $('.moreButton').hide();
                    $('.lessButton').show();
                });

                $('.lessButton').click(function() {
                    $('#joep2').addClass('hide');
                    $('#joep2').hide();
                    $('.lessButton').hide();
                    $('.moreButton').show();
                });

        }
        else if ($('#barbara').find('.teamshade').hasClass('show')) {
            $('joep2').addClass('hide');
            $('.joeBio').fadeOut(200);
            $('#bryanBio').fadeOut(200);
            $('#carlBio').fadeOut(200);
            $('#barbBio').removeClass('hide').delay(200).fadeIn(200);
            $('.employee').find('h2').removeClass('highlight');
            if ($('#barbara').find('h2').hasClass('highlight') === false) {
                $('#barbara').find('h2').addClass('highlight');
            }
        }
         else if ($('#bryan').find('.teamshade').hasClass('show')) {
            $('joep2').addClass('hide');
            $('.joeBio').fadeOut(200);
            $('#carlBio').fadeOut(200);
            $('#barbBio').fadeOut(200);
            $('#bryanBio').removeClass('hide').delay(200).fadeIn(200);
            $('.employee').find('h2').removeClass('highlight');
            if ($('#bryan').find('h2').hasClass('highlight') === false) {
                $('#bryan').find('h2').addClass('highlight');
            }
        }
        else if ($('#carl').find('.teamshade').hasClass('show')) {
            $('joep2').addClass('hide');
            $('.joeBio').fadeOut(200);
            $('#barbBio').fadeOut(200);
            $('#bryanBio').fadeOut(200);
            $('#carlBio').removeClass('hide').delay(200).fadeIn(200);
            $('.employee').find('h2').removeClass('highlight');
            if ($('#carl').find('h2').hasClass('highlight') === false) {
                $('#carl').find('h2').addClass('highlight');
            }
        }

}); // click fn

   $('#joe').click(function() {
            $('#joep2').hide();
            $('.lessButton').hide();
        });


// $('.employee').click(function() {
//     if ($(this).find('.teamshade').hasClass('show')) {
//         $(this).removeClass('show');

//     }
// })


// Gallery Slider
$('#slider').on("scroll", function() {
    $('.slides').css({
        'background-position': $(this).scrollLeft()/6-200+ "px 0"
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
            'background-position': $(event.target).scrollLeft()/6-200+ "px 0" //50-120+ "px 0"
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


