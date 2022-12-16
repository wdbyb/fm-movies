import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import { Movie } from '../types';

interface TrendingProps {
  trends: Movie[];
}

const Trending = ({ trends }: TrendingProps) => {
  return (
    <div className="p-4">
      <h2 className="mb-6 text-xl text-white md:text-3xl">Trending</h2>
      <div>
        <Swiper spaceBetween={16} slidesPerView={'auto'} grabCursor={true}>
          {trends.map((movie: any, i: number) => {
            return (
              <SwiperSlide className="max-w-max" key={i}>
                <Card movie={movie} inSwiper={true} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
