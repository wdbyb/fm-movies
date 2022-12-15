import sprite from '../assets/sprite.svg';

const Search = () => {
  return (
    <div className="flex w-full relative text-white p-6 pl-12 text-base md:text-2xl">
      <label className="w-full">
        <input
          className="w-full bg-transparent outline-none"
          type="text"
          placeholder="Search for movies or TV series"
        />
      </label>
      <svg
        className="w-6 h-6 md:w-8 md:h-8 absolute top-1/2 -translate-y-1/2 left-4 md:left-2"
        width="24"
        height="24"
      >
        <use xlinkHref={`${sprite}#icon-search`} />
      </svg>
    </div>
  );
};

export default Search;
