$(function() {
   "use strict";
  // stciky menu
  var nav=$(".header-full");
  $(window).scroll(function(){
      var fixmenu = $(this).scrollTop();
      if(fixmenu > 185){
          nav.addClass("nav_fixd");
      }
      else{
          nav.removeClass("nav_fixd");
      }  
  });

   // Scroll animation
   AOS.init();
   // Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
   
  $(document).ready(function(){
      function startCarousel(){
         $(".skill-slider").owlCarousel({
               loop:false,
               responsiveClass:true,
               items: 5,
               nav: true,
               autoplay:true,
               autoplayTimeout:2000,
               loop: true,
               navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
               responsive : {
                  0 : {
                     items:1,
                     margin: 15,
                     nav: false,
                  },
                  360 : {
                     items:1,
                     margin: 15,
                     nav: false,
                  },
                  480 : {
                     items:1,
                     margin: 20,
                     nav: false,
                  },
                  768 : {
                     items:2,
                     margin: 20,
                     nav: false,
                  },
                  991 : {
                     items:2,
                     margin: 20,
                  },
                  1200 : {
                     items:3,
                     margin: 20,
                  },
                  1400 : {
                     items:4,
                     margin: 20,
                  },
               }
         });
         $(".clients-slider").owlCarousel({
            loop:false,
            responsiveClass:true,
            items: 1,
            nav: true,
            autoplay:true,
            autoplayTimeout:2000,
            margin: 0,
            loop: true,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
            responsive : {
               0 : {
                  items:1,
                  nav: false,
               },
               360 : {
                  items:1,
                  nav: false,
               },
               480 : {
                  items:1,
                  nav: false,
               },
               768 : {
                  items:1,
               },
               991 : {
                  items:1,
               },
               1200 : {
                  items:1,
               },
               1400 : {
                  items:1,
               },
            }
         });
      }
      startCarousel();
   });
});