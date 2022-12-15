import { Swiper, SwiperSlide } from 'swiper/react';
import CardTrending from './CardTrending';

const Trending = () => {
  return (
    <div className="p-4">
      <h2 className="mb-6 text-xl text-white md:text-3xl">Trending</h2>
      <div>
        <Swiper spaceBetween={16} slidesPerView={'auto'}>
          <SwiperSlide className="max-w-max">
            <CardTrending />
          </SwiperSlide>
          <SwiperSlide className="max-w-max">
            <CardTrending />
          </SwiperSlide>
          <SwiperSlide className="max-w-max">
            <CardTrending />
          </SwiperSlide>
          <SwiperSlide className="max-w-max">
            <CardTrending />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
