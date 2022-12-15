import sprite from '../assets/sprite.svg';

const CardTrending = (props) => {
  const { movie } = props;

  const thumbnailUrl = `.${movie.thumbnail.trending.small}`;

  const imgUrl = new URL(thumbnailUrl, import.meta.url).href;

  return (
    <div className="flex flex-col gap-1 max-w-max relative">
      <div className="relative w-trending-sm md:w-trending-lg">
        {/* PICTURE TAG HERE */}
        <img
          className="w-full object-cover rounded-lg"
          width="240"
          height="140"
          src={imgUrl}
          alt="Movie preview"
        />
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
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75 -z-10"></div>
        <div className="flex items-center text-sm text-white text-opacity-75">
          <div>{movie.year}</div>
          <div
            className="flex items-center mx-5 gap-1 relative before:absolute before:w-1 before:h-1 before:rounded-full before:bg-white before:bg-opacity-75 before:-left-3
        after:absolute after:w-1 after:h-1 after:rounded-full after:bg-white after:bg-opacity-75 after:-right-3"
          >
            <svg className="" width="10" height="10">
              <use xlinkHref={`${sprite}#icon-nav-movies`} />
            </svg>
            <span>{movie.category}</span>
          </div>
          <div>{movie.rating}</div>
        </div>
        <div className="text-white font-medium text-base md:text-2xl">
          {movie.title}
        </div>
      </div>
    </div>
  );
};

export default CardTrending;
