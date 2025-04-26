"use strict";

{
  // nav
  $(function () {
    $(".header__btn").on("click", function () {
      $(".nav").toggleClass("active");
    });

    $(".nav__btn, .nav__item, a").on("click", function () {
      $(".nav").removeClass("active");
    });
  });

  // top slider
  $(".sliderVisual").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
}
