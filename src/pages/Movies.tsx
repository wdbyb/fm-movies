import Content from '../components/Content';
import { Movie } from '../types';

const Movies = ({ movies }: { movies: Movie[] }) => {
  const moviesList = movies.filter(
    (item: any) => item.category === 'Movie' && !item.isTrending
  );

  return <Content movies={moviesList} title={'Movies'} />;
};

export default Movies;
