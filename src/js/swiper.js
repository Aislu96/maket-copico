/* eslint-disable */
import Swiper from "swiper";
import {Navigation, Scrollbar} from "swiper/modules";

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper(".swiper-container", {
    modules: [Navigation, Scrollbar],
    loop: true,
    slidesPerView: "auto",
    direction: 'horizontal',
    breakpoints: {
      320: {
        slidesPerView: 2.5,
      },
      1100: {
        slidesPerView: 3.8,
      }
    },
    allowTouchMove: true,

    navigation: {
      nextEl: ".work__button_two",
      prevEl: ".work__button_one",
    },
    scrollbar: {
      el: '.work__scrollbar',
      hide: true,
      dragClass: 'work__scrollbar-drag',
    },
    autoWidth: true,
  });
});
