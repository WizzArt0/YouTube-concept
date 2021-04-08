const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
  });

const recommended_swiper = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-video-button-next',
      prevEl: '.recommended-video-button-prev',
    },
  
  });

const category_swiper = new Swiper('.category-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    // Navigation arrows
    navigation: {
      nextEl: '.category-button-next',
      prevEl: '.category-button-prev',
    },
  
  });