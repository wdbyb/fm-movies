import { useState } from 'react';

import Trending from '../components/Trending';
import Content from '../components/Content';
import { Movie } from '../types';

interface HomeProps {
  movies: Movie[];
}

const Home = ({ movies }: HomeProps) => {
  const trends = movies.filter((item) => item.isTrending);
  const regularList = movies.filter((item) => !item.isTrending);

  return (
    <>
      <Trending trends={trends} />
      <Content movies={regularList} title={'Recommended for you'} />
    </>
  );
};

export default Home;
