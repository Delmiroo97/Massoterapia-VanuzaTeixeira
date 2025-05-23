    var swiper = new Swiper(".swiper", {
        loop: true,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
    // when window width is >= 320px
             560: {
            slidesPerView: 1,
            spaceBetween: 30
            },
    // when window width is >= 480px
            991: {
            slidesPerView: 1,
            spaceBetween: 30
            },
    // when window width is >= 640px
             1200: {
                slidesPerView: 1,
                spaceBetween: 30
             }
            }
    });