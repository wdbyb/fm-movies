import Content from '../components/Content';
import { Movie } from '../types';

interface BookmarkProps {
  movies: Movie[];
  onBookmarkClick: (id: number) => void;
}

const Bookmark = ({ movies, onBookmarkClick }: BookmarkProps) => {
  const bookmarkedMovies = movies.filter(
    (item: any) => item.isBookmarked && item.category === 'Movie'
  );
  const bookmarkedTvSeries = movies.filter(
    (item: any) => item.isBookmarked && item.category === 'TV Series'
  );

  return (
    <>
      <Content
        movies={bookmarkedMovies}
        onBookmarkClick={onBookmarkClick}
        title={'Bookmarked Movies'}
      />
      <Content
        movies={bookmarkedTvSeries}
        onBookmarkClick={onBookmarkClick}
        title={'Bookmarked TV Series'}
      />
    </>
  );
};

export default Bookmark;
