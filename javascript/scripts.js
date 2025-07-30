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

    const linksSecton = document.querySelectorAll('.nav-js a')

    function scrollToSection(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href');

        const section = document.querySelector(href);

        const initPosition = section.offsetTop;

        window.scrollTo({
            top: initPosition,
            behavior: 'smooth'
        })

    }

    linksSecton.forEach(link => {
        link.addEventListener('click', scrollToSection);
    })