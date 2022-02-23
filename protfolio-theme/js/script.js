jQuery(function ($) {
    "use strict"
    $(document).ready(function () {

        // ..................dark-m..........................................................
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }
        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        }
        toggleSwitch.addEventListener('change', switchTheme, false);

        //.............slider.....................................................
        $('#slider').owlCarousel({
            autoplay: false,
            smartSpeed: 400,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            //animateOut: 'fadeIn',
            //animateIn: 'fadeOut',
            pagination: true,
            paginationSpeed: 400,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            navElement: 'div',
            navText: ['<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
        // ..............skill..............................................
        (function ($) {
            $.fn.progress = function () {
                var percent = this.data("percent");
                this.css("width", percent + "%");
            };
        }(jQuery));

        $(document).ready(function () {
            $(".bar-one .bar").progress();
            $(".bar-two .bar").progress();
            $(".bar-three .bar").progress();
        });



        // ................Isotop init............................................
        var gridfilter = $('#product-filter-content');
        if (gridfilter.length) {
            $('#product-filter-content').imagesLoaded(function () {
                $('#product-filter-nav').on('click', 'button', function () {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
                var $grid = $('#product-filter-content').isotope({
                    itemSelector: '.product-filter-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.product-filter-item',
                    }
                });
            });
        }

        if ($('#product-filter-nav button').length) {
            var projectfiler = $('#product-filter-nav button');
            if (projectfiler.length) {
                $('#product-filter-nav button').on('click', function (event) {
                    $(this).siblings('.active').removeClass('active');
                    $(this).addClass('active');
                    event.preventDefault();
                });
            }
        }


        // ...............Counter section.............................................
        var a = 0;
        $(window).scroll(function () {

            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-number').each(function () {
                    var $this = $(this),
                        countTo = $this.attr('data-count');
                    $({
                        countNum: $this.text()
                    }).animate({
                        countNum: countTo
                    },

                        {
                            duration: 2000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function () {
                                $this.text(this.countNum);
                                //alert('finished');
                            }

                        });
                });
                a = 1;
            }
        });
        // .....................................Testimonials............................
        $('#Testimonials-slider').owlCarousel({
            autoplay: true,
            smartSpeed: 400,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            navElement: 'div',
            navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
        // .....................................blog............................
        $('#blogs').owlCarousel({
            autoplay: false,
            smartSpeed: 400,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            navElement: 'div',
            navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });

    });
});
// raw javascript
// let slid = Document.getElementById("slide1");
// window.addEventListener('scroll', function () {
//     let value = window.scrollY;
//     slid.style.left = value + 'px';


// });
