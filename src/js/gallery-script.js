new Swiper('.image-slider',{

  slidesPerView: 1,

// Autoplay
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },

  speed:2000,

 // Infinite
  loop: true,

// Effect
  effect: 'cube',
  cubeEffect: {
    shadow: false,
  },
  
});