const sliderOptions = (slidesPerView, loop) => {
  return {
    simulateTouch: true,
    touchRatio: 1,
    TouchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
      eventTarget: ".swiper",
    },
    slidesPerView: slidesPerView,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: loop
  };
};
new Swiper(".home__slider", sliderOptions(2.7, false));
new Swiper(".company__slider", sliderOptions(6, true));

console.log("====================================");
console.log(window.outerWidth);
console.log("====================================");
