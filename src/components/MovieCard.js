import FastfoodIcon from "@mui/icons-material/Fastfood";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const MovieCard = (props) => {
  return (
    <div className="w-[calc(85vw-96px)*0.24] h-[calc(100vh-184px)*0.3333] rounded-[20px] cursor-pointer bg-white hover:bg-[#2B3674] text-indigo-900 hover:text-[#eee] p-[18.432px] relative">
      <div className="gradient-overlay rounded-[20px]">
        <img src="./card.png" alt="card.png" className="h-[160px] w-full" />
      </div>
      <div className="text-2xl font-bold ml-2">{props.name ? props.name : "Starbucks"}</div>
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
