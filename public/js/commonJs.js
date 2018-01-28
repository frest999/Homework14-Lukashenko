$(document).ready(function(){

  $(".button-mob").on("click", function () {
    $(".mobile-menu").toggleClass("active-mob");
  });

  $('.grid').masonry();



  $('.testimonials-big-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    initialSlide: 2,
    cssEase: 'linear'
  });
});

