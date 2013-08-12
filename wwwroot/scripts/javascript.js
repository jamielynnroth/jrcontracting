
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
		// 	//animation complete
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
		// 	//animation complete
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

// slide selector bar to indicate current "page"
// if at top of page, hide the bar
// $(window).scroll(function(){
// if ($(window).scrollTop() < $('#about').position().top) {
// 	$('#selected').hide();
// } else {
// 	$('#selected').show(function() {
//             var leftPos = $('#nav1 a').position().left;
//             var setWidth = $('#nav1 a').width();
//             $('#selected').stop().animate({
//                 left: leftPos,
//                 width: setWidth
//             }, 400, function() {
//                 //animation complete
//             });
//             });
//  }


// var url = window.location.href;
// var urlArray = url.split('#');
// var currentPage= urlArray[1];



//NAVIGATION BAR ANIMATIONS

$(function () {
    // First check what page is loaded 
    var url = window.location.href;
    var urlArray = url.split('/');
    var currentPage= urlArray[urlArray.length-1];
   // var idArray= currentPage.split('#'); 
    //var id = id[1]; 
//Rollover feedback on nav bar 
$('#nav').hover(function() {
    $('#nav li a').hover(function() {
        console.log("hover!");
        var $el = $(this);
        var leftPos = $el.position().left;
        var setWidth = $(this).width();
        $('#selected').stop().animate({
            left: leftPos,
            width: setWidth
        }, 400, function() {
                $('#selected').removeClass('hide');
                $('#selected').stop().fadeIn(400);   

            } //animate callback
            ); // animate fn
    }); // nav a hover
        }, function () {
            // On the landing page, make red bar disappear when nav is not being hovered upon
            if (currentPage === 'index.html') {
                console.log('made it');
                $('#selected').stop().fadeOut(400);
            }
            else {
                // On any other page besides the home page
                // Slide the bar back to the current page when nav is not being hovered upon
                // for each link in the nav bar:
                $('#nav ul li a').each(function() {
                    
                    // For each link in the navbar, get the pathname
                    var $el = $(this); 
                    var pathname= $el.attr('href').split('/');
                    pathname = pathname[pathname.length-1];

                    // If the pathname is the same as the page that is loaded 
                    if (pathname === currentPage) {
                            // Get the position of the link and center check the left position
                            // to appropriately center the bar above it
                        var navItemWidth = $(this).width();
                        var barWidth = 110;
                        var diff = barWidth - navItemWidth;
                        var balance = diff/2;
                        var origLeftPos= $(this).position().left - balance;
                        // Move the bar to the correct position and then show it if its not already
                        $('#selected').stop().animate({
                            left: origLeftPos}, 400, function() {
                                //animation complete
                                $('#selected').removeClass('hide');
                            });
                        }
                    }); 
            }
        });// hover
$(window).scroll(function(event) {
    event.preventDefault();
    event.stopPropagation();
if ($(window).scrollTop() > $('#about').position().top) { 
   console.log('here');
    // add hash 
    window.location.hash = "about"; 
     //$($(this).attr('href')).fadeIn('slow');
} else {
    window.location.hash = "";
}

if ($(window).scrollTop() > $('#team').position().top) {
    // add hash
    window.location.hash = "team";
} else {
    window.location.hash = "";
}

})

// force event to fire first time
$('#nav').trigger('mouseout');

}); // fn


// QV Nav feedback to copy 

// $('#nav').hover(function() {
//     $('#nav a').hover(function() {
//         console.log("hover!");
//         var $el = $(this);
//         var leftPos = $el.position().left - ($('.navselected').width() - $el.width())/2;
//         $('.navselected').stop().animate({
//             left: leftPos}, 400, function() {
//                 $('.navselected').removeClass('hide');
//                 $('.navselected').stop().fadeIn(400);   

//             } //animate callback
//             ); // animate fn
//     }); // nav a hover
//         }, function () {
//         $('.navselected').stop().fadeOut(400);
//         });// hover

// // force event to fire first time
// $('#nav').trigger('mouseout');

// }); // fn

// if at the start of services page, show the bar and position under services
// if ($(window).scrollTop() > 800) {

// 	$("#selected").stop().animate({
// 		"right":"482px",
// 		"width": "66px",
// 		// "top": "80px"
// 	},600);
// }
// // if at start of team page, slide the bar to team and resize to fit word length
// else if ($(window).scrollTop() > 1550) {
// 	$("#selected").stop().animate({
// 		"right":"382px",
// 		"width": "50px",
// 		// "top": "80px"
// 	},600);
// }
// }); // scroll fn

$('.employee').click(function () {
	if ($(this).find('.employee').find('.teamshade').hasClass('hide') === true) {
		$('teamshade').removeClass('hide');
	} else if ($(this).find('.employee').find('.teamshade').hasClass('hide') === false) {
		$(this).find('.teamshade').addClass('hide');
	}
}); // click fn
// 	if $('this.employee').find('h2').hasClass('highlight') {
// 		$(this).removeClass('highlight');
// 	}, else {
// 		$(this).addClass('highlight');
// 	};
// });


}); // doc ready
//}); 


