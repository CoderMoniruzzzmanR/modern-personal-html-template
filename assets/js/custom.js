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

  $(document).ready(function(){
      function startCarousel(){
         $(".skill-slider").owlCarousel({
               loop:false,
               // margin: 15,
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
      }
      startCarousel();
   });

      
});