import Content from '../components/Content';
import { Movie } from '../types';

interface MoviesProps {
  movies: Movie[];
  onBookmarkClick: (id: number) => void;
}

const Movies = ({ movies, onBookmarkClick }: MoviesProps) => {
  const moviesList = movies.filter(
    (item: any) => item.category === 'Movie' && !item.isTrending
  );

  return (
    <Content
      movies={moviesList}
      onBookmarkClick={onBookmarkClick}
      title={'Movies'}
    />
  );
};

export default Movies;
