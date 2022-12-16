import Content from '../components/Content';
import { Movie } from '../types';

interface SeriesProps {
  movies: Movie[];
}

const Series = ({ movies }: SeriesProps) => {
  const seriesList = movies.filter(
    (item: any) => item.category === 'TV Series' && !item.isTrending
  );

  return <Content movies={seriesList} title={'TV Series'} />;
};

export default Series;
