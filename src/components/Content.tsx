import Card from './Card';

const Content = ({ movies }) => {
  return (
    <div className="p-4">
      <h2 className="mb-6 text-xl text-white md:text-3xl">
        Recommended for you
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie, i: number) => (
          <Card movie={movie} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Content;