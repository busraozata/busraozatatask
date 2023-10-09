var swiper = new Swiper(".mySwiper", {

    slidesPerView: 'auto',
    direction: 'horizontal',
    spaceBetween: 0,
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    spaceBetween: 10,
    mousewheelControl: true,
    centeredSlides: false,
    mousewheel: {
        enabled: true,
        sensitivity: 4,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        1024: {
            spaceBetween: 30,
          
        },
    },
});