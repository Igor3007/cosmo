  import Swiper, {  Pagination, Navigation,  } from 'swiper';

  Swiper.use([Pagination, Navigation]);
  
  //data-swiper="clients"
  const clients = new Swiper('[data-swiper="clients"]', {
     
    slidesPerView: 8,
    spaceBetween: 15,
    loop: true,
     
    breakpoints: {
      0: {
        slidesPerView: 3,
        slidesPerColumn: 3,
        slidesPerColumnFill: 'row',
      },
      580: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
  
      },
      940: {
        slidesPerView: 6,
      },
      1025: {
        slidesPerView: 8,
      },
    },
      
       
  });
