new Swiper('.container-slider',{
    // Progressbar
    pagination: {
  el: '.swiper-pagination',
  //  Bullets
    clickable: true,
    
    },

    centeredSlides: true,
    slideToClickedSlide: true,
  
    // Infinite
      loop: true,
      slidesPerView: 1,
    // Effect flip or slide or fade
      effect: 'slide',

      flipEffect:{
        slideShadows: true,
        limitRotation: true,
      },
      
      // fadeEffect: {
      //   crossFade: true,
      // },

      keyboard: {
        // Enable
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      }
    
}

);
