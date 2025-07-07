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
            560: {
            slidesPerView: 1,
            spaceBetween: 30
            },
    
            991: {
            slidesPerView: 1,
            spaceBetween: 30
            },

             1200: {
                slidesPerView: 1,
                spaceBetween: 30
             }
        },
    });

    const btnMenu = document.getElementById('js-btn-menu');

    btnMenu.addEventListener('click', () => {
        document.documentElement.classList.toggle('opened-menu');
        btnMenu.classList.toggle('is-active')
    });