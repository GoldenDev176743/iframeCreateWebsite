import MovieCard from "./MovieCard";

const MovieCardSet = () => {
  return (
    <div className="w-[24%] h-[calc(100vh-184px)] bg-white rounded-[20px]">
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default MovieCardSet;
