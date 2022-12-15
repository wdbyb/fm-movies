import sprite from '../assets/sprite.svg';
import logo from '../assets/logo.svg';

const Nav = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-semiDarkBlue md:rounded-xl lg:flex-col lg:justify-start lg:absolute lg:top-4 lg:bottom-4 lg:left-4">
      <div className="shrink-0 lg:mb-12">
        <img width="25" height="20" src={logo} alt="" />
      </div>
      <div className="flex gap-6 text-greyishBlue lg:flex-col lg:mb-auto">
        <svg width="16" height="16">
          <use xlinkHref={`${sprite}#icon-nav-home`} />
        </svg>
        <svg width="16" height="16">
          <use xlinkHref={`${sprite}#icon-nav-movies`} />
        </svg>
        <svg width="16" height="16">
          <use xlinkHref={`${sprite}#icon-nav-tv-series`} />
        </svg>
        <svg width="16" height="16">
          <use xlinkHref={`${sprite}#icon-nav-bookmark`} />
        </svg>
      </div>
      <div className="w-6 h-6 rounded-full bg-white shrink-0"></div>
    </div>
  );
};

export default Nav;
