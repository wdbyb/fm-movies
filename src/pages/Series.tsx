import Content from '../components/Content';
import { Movie } from '../types';

interface SeriesProps {
  movies: Movie[];
  onBookmarkClick: (id: number) => void;
}

const Series = ({ movies, onBookmarkClick }: SeriesProps) => {
  const seriesList = movies.filter(
    (item: any) => item.category === 'TV Series' && !item.isTrending
  );

  return (
    <Content
      movies={seriesList}
      onBookmarkClick={onBookmarkClick}
      title={'TV Series'}
    />
  );
};

export default Series;
