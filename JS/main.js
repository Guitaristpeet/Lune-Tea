const swiper1 = new Swiper('.swiper1', {
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
const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 200,
    loop: true,
    grabCursor: true,
    followFinger: true,
    breakpoints: {
        780: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            autoplay: false,
            grabCursor: false,
            followFinger: false,
        },
    }
});
const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 200,
    loop: true,
    grabCursor: true,
    followFinger: true,
    breakpoints: {
        780: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
            autoplay: false,
            grabCursor: false,
            followFinger: false,
        },
    }
});