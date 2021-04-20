const myChannelSlider = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900:{
        slidesPerView: 6
      },
      1600:{
        slidesPerView: 5
      },
      1300:{
        slidesPerView: 4
      },
      1100:{
        slidesPerView: 3
      },
      800:{
        slidesPerView: 2
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-next',
      prevEl: '.channel-button-prev',
    },
  
  });

const recommended_swiper = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1600:{
        slidesPerView: 3
      },
      1100:{
        slidesPerView: 2
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-video-button-next',
      prevEl: '.recommended-video-button-prev',
    },
  
  });

const category_swiper = new Swiper('.category-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900:{
        slidesPerView: 6
      },
      1600:{
        slidesPerView: 5
      },
      1300:{
        slidesPerView: 4
      },
      1100:{
        slidesPerView: 3
      },
      800:{
        slidesPerView: 2
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: '.category-button-next',
      prevEl: '.category-button-prev',
    },
  
  });

  const searchButton = document.querySelector('.mobile-search')
  const mobileSearch = document.querySelector('.input-group')
  searchButton.addEventListener('click',()=>{
    mobileSearch.classList.toggle('is-open');
  });

  if (document.documentElement.scrollWidth <= 640){
    myChannelSlider.destroy();
    recommended_swiper.destroy();
    category_swiper.destroy();
  }