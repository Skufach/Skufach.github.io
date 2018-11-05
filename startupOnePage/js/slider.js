$(document).ready(function () {

	$('.single-item').slick();

	$('.members-partners_slider').slick({
		centerMode: true,
		centerPadding: '20px',
		slidesToShow: 3,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: true,
			// centerMode: false,
			// centerPadding: '50px',
			slidesToShow: 2
		}
	},
	{
		breakpoint: 992,
		settings: {
			arrows: true,
			// centerMode: true,
			centerPadding: '0px',
			slidesToShow: 2
		}
	},
	{
		breakpoint: 768,
		settings: {
			arrows: true,
			// centerMode: true,
			centerPadding: '100px',
			slidesToShow: 1
		}
	},
	{
		breakpoint: 480,
		settings: {
			arrows: true,
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 1
		}
	},
	{
		breakpoint: 420,
		settings: {
			arrows: true,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
		}
	}
	]

});

});