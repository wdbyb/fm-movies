import Card from './Card';
import { Movie } from '../types';

interface ContentProps {
  movies: Movie[];
  title: string;
  onBookmarkClick: (id: number) => void;
}

const Content = ({ movies, title, onBookmarkClick }: ContentProps) => {
  return (
    <div className="p-4">
      <h2 className="mb-6 text-xl text-white md:text-3xl">{title}</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie: Movie, i: number) => (
          <Card movie={movie} onClick={onBookmarkClick} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Content;
