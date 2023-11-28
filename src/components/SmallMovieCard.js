import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const SmallMovieCard = (props) => {
  return (
    <div className="rounded-2xl cursor-pointer bg-white hover:bg-[#2B3674] text-indigo-900 hover:text-[#eee] p-[10px] relative">
      <div className="gradient-overlay rounded-[20px]">
        <img src="./card.png" alt="card.png" className="h-[120px] w-full" />
      </div>
      <div className="text-xl py-2 font-bold">{props.name}</div>
      <div className="w-[40px] h-[40px] bg-[#5f8696] rounded-[10px] text-white flex items-center justify-center absolute right-6 top-6">
        <AccessTimeOutlinedIcon />
      </div>
    </div>
  );
};

export default SmallMovieCard;
