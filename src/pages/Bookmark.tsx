import Content from '../components/Content';
import { Movie } from '../types';

interface BookmarkProps {
  movies: Movie[];
}

const Bookmark = ({ movies }: BookmarkProps) => {
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
