$(function () {
	//Slider
	$('.products__slider').slick({
		prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
		nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>'		
	});

	// Accordeon
	$('.question__item-title').on('click', function() {
		$('.question__item').removeClass('question__item--active');
		$(this).parent().toggleClass('question__item--active');
	});

	//Fullpage
	$('#fullpage').fullpage({
		//options here
		sectionSelector: '.fullsection',
		anchors: ['header', 'products', 'benefits', 'specs', 'question', 'contact'],
		menu: '.header',
		scrollingSpeed: 1000
	});

	//Menu-btn
	var btn = $('.icon-menu');
	btn.on('click', function() {
	  $(this).toggleClass('active');
	});
});