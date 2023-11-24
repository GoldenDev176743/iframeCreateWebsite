import FastfoodIcon from "@mui/icons-material/Fastfood";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const MovieCard = () => {
  return (
    <div className="h-[33.33%] rounded-[20px] cursor-pointer hover:bg-[#2B3674] text-indigo-900 hover:text-[#eee] p-[5%] relative">
      <div className="gradient-overlay rounded-[20px]">
        <img src="./card.png" alt="card.png" className="h-[160px] w-[100%]" />
      </div>
      <div className="text-2xl font-bold ml-2">Starbucks</div>
      <div className="flex align-center text-slate-400 ml-2">
        <FastfoodIcon />
        <div className="text-lg font-medium ml-1">10% cashback & off</div>
      </div>
      <div className="w-[40px] h-[40px] bg-[#5f8696] rounded-[10px] text-white flex items-center justify-center absolute right-8 top-8">
        <AccessTimeOutlinedIcon />
      </div>
    </div>
  );
};

export default MovieCard;
