import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import 'swiper/css';
import './App.css';

import data from './data/movies.json';
import Nav from './components/Nav';
import Search from './components/Search';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Bookmark from './pages/Bookmark';
import Content from './components/Content';

import { Movie } from './types';

const App = () => {
  const [movies, setMovies] = useState(data);
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { pathname } = useLocation();

  const handleSearchChange = (name: string): void => {
    setSearchQuery(name);
  };

  useEffect(() => {
    const searched = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery)
    );

    setSearchedMovies(searched);
  }, [searchQuery]);

  return (
    <div className="App font-light bg-darkBlue md:p-6 lg:flex">
      <Nav pathname={pathname} />
      <div className="w-full lg:pl-20 overflow-hidden">
        <Search onChange={handleSearchChange} />
        {searchQuery !== '' ? (
          <Content
            movies={searchedMovies}
            title={`Found ${searchedMovies.length} results for ${searchQuery}`}
          />
        ) : (
          <Routes>
            <Route path="/" element={<Home movies={movies} />} />
            <Route path="/movies" element={<Movies movies={movies} />} />
            <Route path="/series" element={<Series movies={movies} />} />
            <Route path="/bookmark" element={<Bookmark movies={movies} />} />
            <Route
              path="*"
              element={
                <div className="text-white text-center">Nothing here...</div>
              }
            />
          </Routes>
        )}
      </div>
    </div>
  );
};

export default App;
