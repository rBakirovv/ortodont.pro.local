window.addEventListener("DOMContentLoaded", function () {
  const swiperBraces = new Swiper('.braces-types__swiper', {
    slideToClickedSlide: false,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    pagination: {
      el: ".braces-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      1000: {
        loop: true,
        slideToClickedSlide: false,
        centeredSlides: false,
        slidesPerView: "auto",
      },
    },
  });
})