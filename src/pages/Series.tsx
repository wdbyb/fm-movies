import Content from '../components/Content';
import { Movie } from '../types';

const Series = ({ movies }: { movies: Movie[] }) => {
  const seriesList = movies.filter(
    (item: any) => item.category === 'TV Series' && !item.isTrending
  );

  return <Content movies={seriesList} title={'TV Series'} />;
};

export default Series;
