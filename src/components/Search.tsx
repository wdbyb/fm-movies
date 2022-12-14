import sprite from '../assets/sprite.svg';

const Search = () => {
  return (
    <div className="flex w-full relative text-white p-6 pl-12">
      <label className="w-full">
        <input
          className="w-full bg-transparent outline-none"
          type="text"
          placeholder="Search for movies or TV series"
        />
      </label>
      <svg className="absolute left-4" width="24" height="24">
        <use xlinkHref={`${sprite}#icon-search`} />
      </svg>
    </div>
  );
};

export default Search;
