import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

import 'swiper/css';
import './App.css';

import Nav from './components/Nav';
import Search from './components/Search';
import Home from './pages/Home';
import data from './data/movies.json';

const App = () => {
  const [movies, setMovies] = useState(data);
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="App font-light bg-darkBlue md:p-6 lg:flex">
      <Nav pathname={pathname} />
      <div className="w-full lg:pl-20 overflow-hidden">
        <Search />

        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route
            path="*"
            element={
              <div className="text-white text-center">Nothing here...</div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
