import CreateCard from "../../components/CreateCard";
import MovieCards from "../../components/MovieCards";

const Content = () => {
  return (
    <div className="flex justify-between mt-6 px-12">
      <div className="w-[24%] h-[calc(100vh-184px)] bg-white rounded-[20px]">
        <CreateCard />
        <MovieCards />
        <MovieCards />
      </div>
      <div className="w-[24%] h-[calc(100vh-184px)] bg-white rounded-[20px]">
        <MovieCards />
        <MovieCards />
        <MovieCards />
      </div>
      <div className="w-[24%] h-[calc(100vh-184px)] bg-white rounded-[20px]">
        <MovieCards />
        <MovieCards />
        <MovieCards />
      </div>
      <div className="w-[24%] h-[calc(100vh-184px)] bg-white rounded-[20px]">
        <MovieCards />
        <MovieCards />
        <MovieCards />
      </div>
    </div>
  );
};

export default Content;
