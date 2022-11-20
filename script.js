
window.onload = function(){
    $("#load").fadeOut();
    $("body").removeClass("hidden");
}

$(document).ready(function(){
	var altura = ($('.header').offset().top)/2;
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.header').addClass('header-fixed');
		} else {
			$('.header').removeClass('header-fixed');
		}
	});

});

