import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Autoplay } from 'swiper/modules';
import './swiper-styles.css';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';

export const swiperGlobals = {
  loop: true,
  grabCursor: true,
  mousewheel: true,
};

interface GalleryProps {
  images: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const swiperConfig = {
    slidesPerView: 1,
    modules: [Autoplay, Navigation],
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    ...swiperGlobals,
    mousewheel: false,
    grabCursor: false,
    navigation: true,
  };

  return (
    <div className="mt-8 flex justify-center w-full">
      <div className="max-w-full w-full">
        <Swiper {...swiperConfig} className="mySwiper">
          {images.map(image => {
            return (
              <SwiperSlide>
                <img src={image} className="w-full h-full object-cover" alt="" title="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
