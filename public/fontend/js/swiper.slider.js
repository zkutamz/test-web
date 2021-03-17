$(document).ready(function() {
  // Swiper: Slider
      new Swiper('.swiper-container', {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          disabledClass: "swiper-button-disabled",
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 20,
          breakpoints: {
              1920: {
                  slidesPerView: 3,
                  spaceBetween: 30
              },
              1028: {
                  slidesPerView: 2,
                  spaceBetween: 30
              },
              480: {
                  slidesPerView: 1,
                  spaceBetween: 10
              }
          }
      });
  });
  