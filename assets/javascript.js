/* eslint-disable no-undef*/

jQuery(document).ready(function () {
  console.log('Salut jQuery');
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true
  });
});
