import FastfoodIcon from "@mui/icons-material/Fastfood";

const MovieCard = () => {
  return (
    <div className="p-[5%]">
      <div className="gradient-overlay rounded-[20px]">
        <img src="./card.png" alt="card.png" className="h-[160px] w-[100%]" />
      </div>
      <div className="text-indigo-900 text-2xl font-bold ml-2">Starbucks</div>
      <div className="flex align-center text-slate-400 ml-2">
        <FastfoodIcon />
        <div className="text-lg font-medium ml-1">10% cashback & off</div>
      </div>
    </div>
  );
};

export default MovieCard;
