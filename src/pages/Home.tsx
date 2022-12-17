import { useState } from 'react';

import Trending from '../components/Trending';
import Content from '../components/Content';
import { Movie } from '../types';

interface HomeProps {
  movies: Movie[];
  onBookmarkClick: (id: number) => void;
}

const Home = ({ movies, onBookmarkClick }: HomeProps) => {
  const trends = movies.filter((item) => item.isTrending);
  const regularList = movies.filter((item) => !item.isTrending);

  return (
    <>
      <Trending trends={trends} onBookmarkClick={onBookmarkClick} />
      <Content
        movies={regularList}
        onBookmarkClick={onBookmarkClick}
        title={'Recommended for you'}
      />
    </>
  );
};

export default Home;
