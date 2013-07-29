$(document).ready(function (){

// Shrink header and img + hide text when scrolling begins
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

// slide selector bar to indicate current "page"
// if at top of page, hide the bar
$(window).scroll(function(){
if ($(window).scrollTop() < 800) {
	$('#selected').hide()
} else {
	$('#selected').show()
};

// if at the start of services page, show the bar and position under services
if ($(window).scrollTop() > 800) {
	$("#selected").stop().animate({
		"right":"482px",
		"width": "66px",
		// "top": "80px"
	},600);
}
// if at start of team page, slide the bar to team and resize to fit word length
else if ($(window).scrollTop() > 1550) {
	$("#selected").stop().animate({
		"right":"382px",
		"width": "50px",
		// "top": "80px"
	},600);
}
}); // scroll fn

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
		



