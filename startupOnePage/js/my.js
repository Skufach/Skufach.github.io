$(document).ready(function () {

// Меню для маленьких расширений
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var nav = $('.header-nav-navigation ');
	var nav_link = $('.header-nav-navigation li');

	link.click(function(){
		link.toggleClass('menu-link_active');
		nav.toggleClass('header-nav-navigation_active');
	});

	nav_link.click(function() {
		link.toggleClass('menu-link_active');
		nav.toggleClass('header-nav-navigation_active');
	});

// Фикс меню при скролле 

var header = $('#header-nav');
header.removeClass('header-nav_fixed');
$(window).scroll(function(){
	if ($(this).scrollTop() > 700) {
		header.addClass('header-nav_fixed').fadeIn('slow');
	} 
	else {
		header.removeClass('header-nav_fixed').fadeIn('slow');
	}
});

});