  jQuery(function ($) {
  "use strict"


$(document).ready(function(){
//..... Stikcy Header...................................................
    var menubar = $('#sp-menubar');
    // var topbar = $('#sp-top-bar');
    if($('#sp-menubar').length) {
        var headerHeight = menubar.outerHeight();
        var stickyHeaderTop = menubar.offset().top;
        //menubar.css({"top":stickyHeaderTop});
        //slidebar.css({"margin-top":headerHeight});
        var stickyHeader = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyHeaderTop) {
                menubar.addClass('header-sticky');
        		//menubar.css({"top":"0px"});
            } else {
                if (menubar.hasClass('header-sticky')) {
                    menubar.removeClass('header-sticky');
        			//menubar.css({"top":stickyHeaderTop});
                }
            }
        };
        stickyHeader();
        $(window).scroll(function () {
            stickyHeader();
        });
    }


     // alert(stickyHeaderTop);



//.......slider owlcarousel..........................................
    $('#slider').owlCarousel({
	    autoplay: true,
	    smartSpeed: 1800,
	    autoplayTimeout: 8000,
	    autoplayHoverPause: true,
	    animateOut: 'fadeIn',
        animateIn: 'fadeOut',
        pagination : true,
		paginationSpeed : 400,
	    loop:true,
	    margin:0,
	    nav: true,
	    dots: false,
	    navElement: 'div',
	    navText:['<span class="fas fa-angle-left"></span>','<span class="fas fa-angle-right"></span>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        992:{
	            items:1
	        },
	        1200:{
	            items:1
	        }
	    }
	});
 
// ............about-us.........................................

	$('.video-icon').magnificPopup({
  		type: 'iframe'
  		
		});
//.......testmonial slider owlcarousel....................
    $('#testmonial-content').owlCarousel({
	    autoplay: true,
	    smartSpeed: 1800,
	    autoplayTimeout: 6000,
	    autoplayHoverPause: true,
	    loop:true,
	    margin:0,
	    nav: true,
	    dots: false,
	    navElement: 'div',
	    navText:['<span class="fas fa-angle-left"></span>','<span class="fas fa-angle-right"></span>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        992:{
	            items:1
	        },
	        1200:{
	            items:1
	        }
	    }
	});
//.......projects slider owlcarousel....................
    $('#project').owlCarousel({
	    autoplay: true,
	    smartSpeed: 1000,
	    autoplayTimeout: 2000,
	    autoplayHoverPause: true,
	    loop:true,
	    margin:0,
	    nav: true,
	    dots: false,
	    navElement: 'div',
	    navText:['<span class="fas fa-long-arrow-alt-left"></span>','<span class="fas fa-long-arrow-alt-right"></span>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        992:{
	            items:1
	        },
	        1200:{
	            items:1
	        }
	    }
	});
//.......testmonial slider owlcarousel....................
    $('#clients').owlCarousel({
	    autoplay: true,
	    smartSpeed: 3000,
	    autoplayTimeout: 3800,
	    autoplayHoverPause: true,
	    loop:true,
	    margin:0,
	    nav: false,
	    dots: false,
	    navElement: 'div',
	    navText:['<span class="fas fa-angle-left"></span>','<span class="fas fa-angle-right"></span>'],
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        992:{
	            items:1
	        },
	        1200:{
	            items:1
	        }
	    }
	});

//............. Counter section.......................................
    var a = 0;
    $(window).scroll(function() {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-number').each(function() {
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
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }

            });
        });
        a = 1;
      }
    });

// ...........preloader.............................

    $(window).on("load", function() {
	$(".preloader").fadeOut();

	});


//.........offcanvas-bar...........................
$('.offcanvas-menu').on('click', function() {

$('.offcanvas').addClass('show');

}); 


$('.offcanvas-close-btn').on('click', function() {
$('.offcanvas').removeClass('show');

}); 

 // WOW INIT JS

  // Helper function for add element box list in WOW
  // WOW.prototype.addBox = function(element) {
  //   this.boxes.push(element);
  // };

  
// Init WOW.js and get instance
  var wow = new WOW();
  wow.init();
  // Attach scrollSpy to .wow elements for detect view exit events,
  // then reset elements and add again for animation
  // jQuery('.wow').on('scrollSpy:exit', function() {
  //   jQuery(this).css({
  //     'visibility': 'hidden',
  //     'animation-name': 'none'
  //   }).removeClass('animated');
  //   wow.addBox(this);
  // }).scrollSpy();



 });

 });
