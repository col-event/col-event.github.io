$(document).ready(function() {
	//corporate button
	$("#btn-corporate").click(function(e) {
		e.preventDefault();
		$('.sub-right-list').slideToggle('fast');

	});

	//carrousel
	$('.carousel').carousel({
		interval: false
	});
	
	//bx slide
	$('.slider1').bxSlider({
		infiniteLoop:false,
		randomStart: false,
		auto: true,
		moveSlides:1,
		autoStart:false,
	    slideWidth: 291,
	    maxSlides: 4,
	    slideMargin: 1,
	    pager:false,
	    captions: true

	  });
	//show/hide caption
	$(".slider1 .slide").mouseenter(function () {
	    $(this).find(".bx-caption").fadeIn();
	})

	$(".slider1 .slide").mouseleave(function () {
	    $(this).find(".bx-caption").fadeOut();
	});

	//
	/*
	$("#btn-corporate").click(function(event) {
		event.preventDefault();
		$(this).find('img').attr('src', '/images/');
	});
	*/

});