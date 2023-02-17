$('.slider-for1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav1'
});
$('.slider-nav1').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-for1',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});

$('.slider-for2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav2'
});
$('.slider-nav2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.slider-for2',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
