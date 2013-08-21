
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

$(window).scroll(function() { 
//check which sections have been scrolled past the top
$('.section').each(function() {
    if ($(window).scrollTop() > $(this).position().top) {
        var currentSection = $(this).attr('id');
       // $(this).data($(this).attr('id'));
        //get the list of sections
        //var currentSection = $(this).data();
        console.log(currentSection);
        // pick the last one on the list
        // change the window.location.hash to $(this).attr('id')
        window.location.hash=currentSection;
        return false;
    }
});
});

$(function () {
    // First check what page is loaded 
    var url = window.location.href;
    var urlArray = url.split('/');
    var currentPage= urlArray[urlArray.length-1];
   // var idArray= currentPage.split('#'); 
    //var id = id[1]; 
//Rollover feedback on nav bar 
//$('#nav').hover(function() {
    $('#nav li a').hover(function() {
        var $el = $(this);
        var leftPos = $el.position().left;
        var setWidth = $(this).width();
        $('#selected').stop().animate({
            left: leftPos,
            width: setWidth
        }, 400, function() {
            //$('#selected').removeClass('hide');
            $('#selected').stop().fadeIn(400);   
            });
    }, //animate callback
        function() {
            // if the window is not scrolled past the first section
            // hide the #selected on mouseout 
            if ($(window).scrollTop() < $('#about').position().top) {
             $('#selected').stop().fadeOut(400);
             window.location.hash="";
            } //if
            else {
                $('#selected').stop().fadeIn(400);
            }
         })// mouseout fn





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



$('.employee').click(function () {
	if ($(this).find('.employee').find('.teamshade').hasClass('hide') === true) {
		$('teamshade').removeClass('hide');
	} else if ($(this).find('.employee').find('.teamshade').hasClass('hide') === false) {
		$(this).find('.teamshade').addClass('hide');
	}
}); // click fn


//  if $('this.employee').find('h2').hasClass('highlight') {
//      $(this).removeClass('highlight');
//  },  else {
//      $(this).addClass('highlight');
//};
// });


}); // doc ready
});

