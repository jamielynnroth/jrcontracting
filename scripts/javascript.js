$(document).ready(function (){

$(function(){
    $('#shade').data('size','big');
});



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

}); // doc ready
		
		// $('.header').animate({
		// 	height: '-=50px'
		// }, 1000);
		
		// $('#logo').fadeOut('slow', function() {
		// 	//animation complete
		// });
		
// 		$('#shade').animate({
// 			height: '-=50px'
// 		}, 1000);
	
// 	}
// }

	//}); //docready 
	// $(window).scroll(function(event) {
	// 	event.stopPropagation();
	// 	console.log('scrolling');
	// 	$('.header').animate({
	// 		height: '-=50px'
	// 	}, 1000);
	// 	$('#shade').animate({
	// 		height: '-=50px'
	// 	}, 1000);
	// }); // scroll fn


	// $('#more').click(
	// 	function(){
	// 		$(this).find('#fullTeam').removeClass('hidden')
	// 		// $(this).find('#more').addClass('hidden')

	// 	});

