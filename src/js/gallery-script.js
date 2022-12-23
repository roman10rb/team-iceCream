new Swiper('.image-slider',{
  navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev'
  },

// Autoplay
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },

// switch slide on click
  slideToClickedSlide: true,

// Infinite
  loop: true,

// Effect
  effect: 'flip',
  
});