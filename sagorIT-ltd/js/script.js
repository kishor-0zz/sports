jQuery(function($){
"use strict"


$(document).ready(function() {

// ..................cart-item.........................

  $('.list-item4').on('click',function() {
    	$('.st-cart-panel').slideToggle();
  	 });

  $('.cart-item').on('click', function() {
        $('.st-cart-panel').addClass('show');
      });

   $('.cart-close-btn').on('click', function(){
   	$('.cart-item:hover').remove();
   });
   // ..................toggle-bar.........................

  $('.top-Menu-toggle').on('click',function() {
      $('.toggle-panel-inner').slideToggle();
     });
  $('.top-Menu-toggle').on('click',function() {
      $('.toggle-panel-inner').removeToggle();
     });
  // ..................calender-item.........................

    $('.calender-item1').on('click',function() {
      $('.calender-item').slideToggle();
     });

   $('.dismiss1').on('click', function(){
    $('.calender-item-inner').remove();
   });
 // ..................massage-item.........................

   $('.message-item').on('click',function() {
     $('.top-message').slideToggle();
    });

   // ..................massage-item.........................

  $('.notificatio-item').on('click',function() {
    $('.top-notifications').slideToggle();
   });

//............. Counter section.......................................
  var a = 0;
  $(window).scroll(function() {

    var oTop = $('.counter-item').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter-dice').each(function() {
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

	$('#slider').owlCarousel({
	    autoplay: true,
	    smartSpeed: 400,
	    autoplayTimeout: 5000,
	    autoplayHoverPause: true,
	    loop:true,
	    margin:0,
	    nav: true,
	    dots: true,
	    navElement: 'div',
	    navText:['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
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

  $("#slider").on("translate.owl.carousel", function(){
  $("#slide-category .slid-item .slid-content h2").removeClass("animated fadeInDown").css("opacity", "0");
   $("#slide-category .slid-item .slid-content h4").removeClass("animated fadeInDown").css("opacity", "0");
  $("#slide-category .slid-item .slid-content a.primaryBtn").removeClass("animated fadeInUp").css("opacity", "0");
  });

  $("#slider").on("translated.owl.carousel", function(){
  $("#slide-category .slid-item .slid-content h2").addClass("animated fadeInDown").css("opacity", "1");
  $("#slide-category .slid-item .slid-content h4").addClass("animated fadeInDown").css("opacity", "1");
  $("#slide-category .slid-item .slid-content a.primaryBtn").addClass("animated fadeInUp").css("opacity", "1");
  });

 var quantitiy=0;
   $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        // If is not undefined
        $('#quantity').val(quantity + 1);
        // Increment
    });

     $('.quantity-right-plus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        // If is not undefined
        // Increment
        if(quantity>0){
        $('#quantity').val(quantity - 1);
        }
    });

     // Stikcy Header
    var topbar = $('#topbar');
    if($('#topbar').length) {
      var headerHeight = topbar.outerHeight();
      var stickyHeaderTop = topbar.offset().top;
      var stickyHeader = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > stickyHeaderTop) {
              topbar.addClass('header-sticky');
          } else {
              if (topbar.hasClass('header-sticky')) {
                  topbar.removeClass('header-sticky');
              }
          }
      };
      stickyHeader();
      $(window).scroll(function () {
          stickyHeader();
      });
  };


    // Init WOW.js and get instance
  var wow = new WOW();
  wow.init();

  var btn = $('#scrolltop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });



});
});
