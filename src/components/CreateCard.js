import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CreateCard = () => {
  return (
    <div className="h-[33.33%] bg-[#11047A] rounded-[20px] flex flex-col justify-center items-center text-white text-2xl relative cursor-pointer hover:opacity-[0.9] hover:animate-[scale_0.2s_linear] hover:scale-105 z-10">
      <AddCircleOutlineIcon
        sx={{ position: "absolute", transform: "scale(3)" }}
      />
      <div className="absolute top-[66%]">Create Flow</div>
    </div>
  );
};

export default CreateCard;
