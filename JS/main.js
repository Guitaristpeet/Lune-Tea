const swiper = new Swiper('.swiper', {
    // spaceBetween: 100,
    slidesPerView: 3.7,
    loop: true,
    autoplay: {
        delay: 1,
    },
    freeMode: true, 
    speed: 7000,
    breakpoints: {
        1500: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        1100: {
            slidesPerView: 3.7,
            spaceBetween: 140,
          },
        1000: {
            slidesPerView: 3.1,
            spaceBetween: 100,
          },
        850: {
            slidesPerView: 2.7,
            spaceBetween: 100,
        },
        750: {
            spaceBetween: 100,
        },
        600: {
            slidesPerView: 2.5,
            spaceBetween: 140,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 140,
        },
        100: {
            slidesPerView: 1.5,
            spaceBetween: 50,
        },
    }
});