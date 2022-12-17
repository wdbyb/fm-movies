import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Card from './Card';
import { Movie } from '../types';

interface TrendingProps {
  trends: Movie[];
  onBookmarkClick: (id: number) => void;
}

const Trending = ({ trends, onBookmarkClick }: TrendingProps) => {
  return (
    <div className="p-4">
      <h2 className="mb-6 text-xl text-white md:text-3xl">Trending</h2>
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={'auto'}
          grabCursor={true}
          loop={true}
          speed={1000}
          autoplay={{
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        >
          {trends.map((movie: any, i: number) => {
            return (
              <SwiperSlide className="max-w-max" key={i}>
                <Card movie={movie} onClick={onBookmarkClick} inSwiper={true} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Trending;
