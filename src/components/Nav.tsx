import { Link } from 'react-router-dom';
import sprite from '../assets/sprite.svg';
import avatar from '../assets/image-avatar.png';

interface NavProps {
  pathname: string;
}

const Nav = ({ pathname }: NavProps) => {
  return (
    <div className="flex items-center justify-between p-6 bg-semiDarkBlue md:rounded-xl lg:flex-col lg:justify-start lg:absolute lg:top-4 lg:bottom-4 lg:left-4">
      <div className="shrink-0 lg:mb-12 text-red">
        <svg width="25" height="20">
          <use xlinkHref={`${sprite}#logo`} />
        </svg>
      </div>
      <div className="flex gap-6 text-greyishBlue lg:flex-col lg:mb-auto">
        <Link
          to="/"
          className={`transition duration-300 hover:text-red ${
            pathname === '/' ? 'text-white' : ''
          }`}
          aria-label="Navigate to Home"
        >
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-nav-home`} />
          </svg>
        </Link>
        <Link
          to="movies"
          className={`transition duration-300 hover:text-red ${
            pathname === '/movies' ? 'text-white' : ''
          }`}
          aria-label="Navigate to Movies"
        >
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-nav-movies`} />
          </svg>
        </Link>
        <Link
          to="series"
          className={`transition duration-300 hover:text-red ${
            pathname === '/series' ? 'text-white' : ''
          }`}
          aria-label="Navigate to TV series"
        >
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-nav-tv-series`} />
          </svg>
        </Link>
        <Link
          to="bookmark"
          className={`transition duration-300 hover:text-red ${
            pathname === '/bookmark' ? 'text-white' : ''
          }`}
          aria-label="Navigate to Bookmarks"
        >
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-nav-bookmark`} />
          </svg>
        </Link>
      </div>
      <div className="w-6 h-6 rounded-full shrink-0">
        <img width="24" height="24" src={avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default Nav;
