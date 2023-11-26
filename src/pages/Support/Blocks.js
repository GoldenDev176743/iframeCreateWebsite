import SmallMovieCard from "../../components/SmallMovieCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const BlockList = [
  {name: "Block 1"},
  {name: "Block 2"},
  {name: "Block 3"},
  {name: "Block 4"},
]

const Blocks = () => {
  return (
    <div>
      <div className="text-indigo-900 text-2xl font-bold">Blocks</div>
      <div className="flex mt-2 gap-8">
        {
          BlockList.map((item) => (
            <SmallMovieCard name={item.name} />
          ))
        }
        <div className="w-[244px] h-[180px] bg-[#11047A] rounded-[20px] flex flex-col justify-end items-center text-white text-2xl cursor-pointer hover:opacity-[0.9] hover:animate-[scale_0.2s_linear] hover:scale-105 z-10">
          <AddCircleOutlineIcon
            sx={{ transform: "scale(3)" }}
          />
          <div className="mb-[10%] mt-[16%]">Create Flow</div>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
