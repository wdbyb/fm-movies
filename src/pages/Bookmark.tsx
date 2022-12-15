import Content from '../components/Content';
import { Movie } from '../types';

const Bookmark = ({ movies }: { movies: Movie[] }) => {
  const bookmarkedMovies = movies.filter(
    (item: any) => item.isBookmarked && item.category === 'Movie'
  );
  const bookmarkedTvSeries = movies.filter(
    (item: any) => item.isBookmarked && item.category === 'TV Series'
  );

  return (
    <>
      <Content movies={bookmarkedMovies} title={'Bookmarked Movies'} />
      <Content movies={bookmarkedTvSeries} title={'Bookmarked TV Series'} />
    </>
  );
};

export default Bookmark;
