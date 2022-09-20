// слайдеры
$(document).ready(function () {
	$(".unique-service-cards").slick({
		responsive: [
			{
				breakpoint: 10000,
				settings: "unslick",
			},
			{
				breakpoint: 1024,
				settings: {
					variableWidth: true,
					centerMode: true,
					arrows: false,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".reports-slider-wrapper").slick({
		variableWidth: true,
		centerMode: true,
		arrows: false,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	});

	$(".recommend-card-wrapper").slick({
		variableWidth: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		// autoplay: true,
		// autoplaySpeed: 1500
	});

	$(".reviews-cards").slick({
		variableWidth: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});
});
