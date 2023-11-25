import MovieCard from "../../components/MovieCard";

const RecentlyAdded = () => {
  return (
    <div className="mt-12">
      <div className="text-indigo-900 text-2xl font-bold font-['DM Sans'] leading-[42px]">
        Recentemente adicionados
      </div>
      <div className="flex gap-10 mt-8">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default RecentlyAdded;
