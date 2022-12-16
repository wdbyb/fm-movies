import Content from '../components/Content';
import { Movie } from '../types';

interface MoviesProps {
  movies: Movie[];
}

const Movies = ({ movies }: MoviesProps) => {
  const moviesList = movies.filter(
    (item: any) => item.category === 'Movie' && !item.isTrending
  );

  return <Content movies={moviesList} title={'Movies'} />;
};

export default Movies;
