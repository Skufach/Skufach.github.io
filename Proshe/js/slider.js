$(document).ready(function(){


	$('.clientage-slider').slick({
		prevArrow: '<button type="button" class="clientage-slider-btn clientage-prev-btn"><img src="img/clientage/prev-button.png"></button>',
		nextArrow: '<button type="button" class="clientage-slider-btn clientage-next-btn"><img src="img/clientage/next-button.png"></button>',

		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

});