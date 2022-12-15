import { useState } from 'react';

import Trending from '../components/Trending';
import Content from '../components/Content';

const Home = (props: any) => {
  const { movies } = props;

  const trends = movies.filter((item: any) => item.isTrending);
  const regulars = movies.filter((item: any) => !item.isTrending);

  return (
    <>
      <Trending trends={trends} />
      <Content movies={regulars} />
    </>
  );
};

export default Home;
