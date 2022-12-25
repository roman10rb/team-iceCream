new Swiper('.container-slider',{
    // Progressbar
    pagination: {
  el: '.swiper-pagination',
  //  Bullets
  clickable: true
    },


    centeredSlides: true,
     // Autoplay
    //   autoplay: {
    //     delay: 2000,
    //     disableOnInteraction: false
    //   },
    // Infinite
      loop: true,
      slidesPerView: 1,
    // Effect
      effect: 'flip',

      flipEffect:{
        slideShadows: true,
        
        limitRotation: true
      },

      keyboard: {
        // Enable
        enabled: true,
  
        onlyInViewport: true,
  
        pageUpDown: true,
      }

    }
    
    );

