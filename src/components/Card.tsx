import Picture from './Picture';
import sprite from '../assets/sprite.svg';
import { Movie } from '../types';

const Card = ({ movie, inSwiper }: { movie: Movie; inSwiper?: boolean }) => {
  const thumbnailUrl = {
    small: `.${movie.thumbnail.regular.small}`,
    medium: `.${movie.thumbnail.regular.medium}`,
    large: `.${movie.thumbnail.regular.large}`,
  };

  const imgUrl = {
    small: new URL(thumbnailUrl.small, import.meta.url).href,
    medium: new URL(thumbnailUrl.medium, import.meta.url).href,
    large: new URL(thumbnailUrl.large, import.meta.url).href,
  };

  return (
    <div
      className={`flex flex-col gap-1 relative rounded-lg overflow-hidden ${
        inSwiper ? 'max-w-max' : ''
      }`}
    >
      <div
        className={`relative ${
          inSwiper ? 'w-trending-sm md:w-trending-lg' : ''
        }`}
      >
        <Picture url={imgUrl} inSwiper={inSwiper} />
        <div className="absolute right-4 top-4 p-3 bg-darkBlue rounded-full bg-opacity-50">
          <svg className="text-white" width="12" height="14">
            <use
              xlinkHref={`${sprite}#icon-bookmark-${
                movie.isBookmarked ? 'full' : 'empty'
              }`}
            />
          </svg>
        </div>
      </div>
      <div
        className={`${
          inSwiper ? 'absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10' : ''
        }`}
      >
        {inSwiper ? (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 -z-10"></div>
        ) : null}
        <div className="flex items-center text-sm text-white text-opacity-75">
          <div>{movie.year}</div>
          <div
            className="flex items-center mx-3 gap-1 relative before:absolute before:w-1 before:h-1 before:rounded-full before:bg-white before:bg-opacity-75 before:-left-2
        after:absolute after:w-1 after:h-1 after:rounded-full after:bg-white after:bg-opacity-75 after:-right-2"
          >
            <svg className="" width="10" height="10">
              <use xlinkHref={`${sprite}#icon-nav-movies`} />
            </svg>
            <span>{movie.category}</span>
          </div>
          <div>{movie.rating}</div>
        </div>
        <div
          className={`text-white font-medium ${
            inSwiper ? 'text-base md:text-2xl' : ''
          }`}
        >
          {movie.title}
        </div>
      </div>
    </div>
  );
};

export default Card;
