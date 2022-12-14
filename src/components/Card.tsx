import image from '../assets/thumbnails/1998/regular/small.jpg';
import sprite from '../assets/sprite.svg';

const Card = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative max-w-max">
        <img
          className="rounded-lg"
          width="255"
          height="174"
          src={image}
          alt=""
        />
        <div className="absolute right-4 top-4 p-3 bg-darkBlue rounded-full bg-opacity-50">
          <svg className="text-white" width="12" height="14">
            <use xlinkHref={`${sprite}#icon-bookmark-empty`} />
          </svg>
        </div>
      </div>
      <div className="flex items-center text-sm text-white text-opacity-75 ">
        <div>2019</div>
        <div
          className="flex items-center mx-3 gap-1 relative before:absolute before:w-1 before:h-1 before:rounded-full before:bg-white before:bg-opacity-75 before:-left-2
        after:absolute after:w-1 after:h-1 after:rounded-full after:bg-white after:bg-opacity-75 after:-right-2"
        >
          <svg className="" width="10" height="10">
            <use xlinkHref={`${sprite}#icon-nav-movies`} />
          </svg>
          <span>Movie</span>
        </div>
        <div>PG</div>
      </div>
      <div className="text-white">The Great Lands</div>
    </div>
  );
};

export default Card;
