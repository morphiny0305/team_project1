// middle_slick_slide
$(document).ready(function(){
	$('.artist-slider').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    centerMode: true,
	    arrows: true,
	    dots: false,
	    speed: 300,
	    centerPadding: '110px',
	    infinite: true,
	    autoplaySpeed: 3500,
	    autoplay: true
	});
});