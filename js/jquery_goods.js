// main-slide 슬릭슬라이드
$('.main-slide').slick({
	slide: 'div',
	adaptiveHeight: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	centerPadding: 0,
	centerMode: false,
	draggable: true,
});
// new-goods 슬릭슬라이드
$('.new-goods').slick({
	slide: 'div',
	adaptiveHeight: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 2500,
	centerPadding: 0,
	centerMode: true,
	draggable: true,
  dots: true,
});
// new-release 슬릭슬라이드
$('.release-img').slick({
	slide: 'div',
	adaptiveHeight: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: false,
	centerPadding: 0,
	centerMode: true,
	draggable: true,
});
