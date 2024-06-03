/* eslint-disable */
import Swiper from "swiper";
import {EffectCoverflow, Navigation, Pagination, Scrollbar} from "swiper/modules";

document.addEventListener('DOMContentLoaded', function () {
 new Swiper(".swiper-container", {
    modules: [Navigation, Scrollbar],
    loop: true,
    slidesPerView: "auto",
    direction: 'horizontal',
    breakpoints: {
      320: {
        slidesPerView: 2.3,
      },
      1100: {
        slidesPerView: 3.8,
      }
    },
    allowTouchMove: true,

    navigation: {
      nextEl: ".work__button_next",
      prevEl: ".work__button_prev",
    },
    scrollbar: {
      el: '.work__scrollbar',
      hide: true,
      dragClass: 'work__scrollbar-drag',
    },
    autoWidth: true,
  });



  new Swiper(".swiper", {
    modules: [Navigation, Scrollbar, EffectCoverflow, Pagination],
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: true,
    effect:"coverflow",
    speed: 800,
    breakpoints: {
      320: {
        direction: 'horizontal',
      },
      850: {
        direction: 'vertical',
      }
    },
    slideNextClass: "swiper-next",
    slideActiveClass: 'swiper-active',
    slidePrevClass: "swiper-prev",
    coverflowEffect: {
      rotate: 0,
      scale: 1.0,
      stretch: 200,
      depth: 500,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".features__button_next",
      prevEl: ".features__button_prev",
    },
    pagination: {
      el: '.swiper__pagination',
      clickable: true,
    },
    on: {
      slideChange: function () {
        var activeIndex = this.activeIndex;
        var slides = document.querySelectorAll('.swiper-slide');
        var featuresSpans= document.querySelectorAll(".features__item span");
        var featuresTexts= document.querySelectorAll(".features__item h4");
        slides.forEach(function (slide, index) {

          if (index === activeIndex) {
            slide.classList.add('swiper-slide-active');
            featuresSpans[index].classList.add('features__span');
            featuresTexts[index].classList.add('features__text');
          } else {
            slide.classList.remove('swiper-slide-active');
            if (featuresSpans[index]) {
              featuresSpans[index].classList.remove('features__span');
              featuresTexts[index].classList.remove('features__text');
            }
          }
        });
      }
    }
  });
});
