/* akk */

var sl_one_click = false;
var sl_two_click = false;
var sl_three_click = false;
var time_sl = 700;

$('.slide_m_one').click(function(){

	if (sl_one_click == false) {
		sl_one_click = true;
		$('.slide_ul_one').slideDown(time_sl);
		$('.slide_ul_three').slideUp(time_sl);	
		$('.slide_ul_two').slideUp(time_sl);
		sl_three_click = false;
		sl_two_click = false;

		
	}else if(sl_one_click == true){
		sl_one_click = false;
		$('.slide_ul_one').slideUp(time_sl);
	}
});
$('.slide_m_two').click(function(){

	if (sl_two_click == false) {
		sl_two_click = true;
		$('.slide_ul_two').slideDown(time_sl);
		$('.slide_ul_one').slideUp(time_sl);	
		$('.slide_ul_three').slideUp(time_sl);
		sl_one_click = false;
		sl_three_click = false;


	}else if(sl_two_click == true){
		sl_two_click = false;
		$('.slide_ul_two').slideUp(time_sl);
	}
});
$('.slide_m_three').click(function(){

	if (sl_three_click == false) {
		sl_three_click = true;
		$('.slide_ul_three').slideDown(time_sl);
		$('.slide_ul_one').slideUp(time_sl);	
		$('.slide_ul_two').slideUp(time_sl);
		sl_one_click = false;
		sl_two_click = false;


	}else if(sl_three_click == true){
		sl_three_click = false;
		$('.slide_ul_three').slideUp(time_sl);
	}
});


/* hamburger_slide_menu */

var h_click = false;

$('.ham_wrap').click(function(){
	if(h_click == false){
		h_click = true;
		$('.ham_wrap').addClass('active');
		$('.slide_menu').addClass('vis');
		$('.slide_menu').css('position', 'initial');
		
		$('.header').css('min-height', 'auto');
		$('.services').css('display', 'none');
		$('.offer').css('display', 'none');
		$('.adventages').css('display', 'none');
		$('.footer').css('display', 'none');

		$('.logo_box').addClass('color_black');
		$('.bar_btn').css('display', 'none');

	}else if(h_click == true){
		h_click = false;
		$('.ham_wrap').removeClass('active');
		$('.slide_menu').removeClass('vis');
		$('.slide_menu').css('position', 'fixed');

		$('.header').css('min-height', '100vh');
		$('.services').css('display', 'block');
		$('.offer').css('display', 'block');
		$('.adventages').css('display', 'block');
		$('.footer').css('display', 'block');

		$('.logo_box').removeClass('color_black');		
		$('.bar_btn').css('display', 'block');
	}
});


var menu_one_el = false;
var menu_two_el = false;
var menu_three_el = false;
var time_drop = 500;

$('.drop_one').click(function(){

	if (menu_one_el == false) {
		menu_one_el = true;
		$('.ul_drop_two').fadeOut(time_drop);
		$('.ul_drop_three').fadeOut(time_drop);
		menu_two_el = false;
		menu_three_el = false;
		
		setTimeout(function () {
            $('.ul_drop').css('left', '0px');
			$('.ul_drop_one').fadeIn(time_drop);
        }, 450);

	}else if(menu_one_el == true){
		menu_one_el = false;
		$('.ul_drop_one').fadeOut(time_drop);
	}
});
$('.drop_two').click(function(){
	if (menu_two_el == false) {
		menu_two_el = true;
		$('.ul_drop_one').fadeOut(time_drop);
		$('.ul_drop_three').fadeOut(time_drop);
		menu_one_el = false;
		menu_three_el = false;

		setTimeout(function () {
   			$('.ul_drop').css('left', '-225px');        
			$('.ul_drop_two').fadeIn(time_drop);
   		}, 450);
		

	}else if(menu_two_el == true){
		menu_two_el = false;
		$('.ul_drop_two').fadeOut(time_drop);
	}
});
$('.drop_three').click(function(){
	

	if (menu_three_el == false) {
		menu_three_el = true;
		$('.ul_drop_one').fadeOut(time_drop);
		$('.ul_drop_two').fadeOut(time_drop);
		menu_one_el = false;
		menu_two_el = false;

		setTimeout(function () {
   			$('.ul_drop').css('left', '-335px');        
			$('.ul_drop_three').fadeIn(time_drop);
   		}, 450);

	}else if(menu_three_el == true){
		menu_three_el = false;
		$('.ul_drop_three').fadeOut(time_drop);
	}
});






/* card */

$('.card-block').click(function() {
	if($(this).find('.card').hasClass('flip')) { 
		$(this).find('.card').removeClass('flip')

	} else {
		$(this).find('.card').addClass('flip')
	}
});

/* scroll_down */

function downOne(){
		var scrollStop = $('.footer').offset().top;
		scrollStop = scrollStop - 50;
		$('html').animate({scrollTop: scrollStop}, 900);
		return false;
	};



/* header fixed */

$(document).ready(function(){
	$("#header").removeClass("default");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 15) {
			$("#header").addClass("default").fadeIn('fast');
		} else {
			$("#header").removeClass("default").fadeIn('fast');
		};
	});
});



