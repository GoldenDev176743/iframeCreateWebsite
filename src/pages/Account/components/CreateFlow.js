import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CreateFlow = () => {
  return (
    <div className="w-[300px] h-[210px] bg-gradient-to-bl from-[#6640FF] to-[#8364FF] rounded-[20px] shadow text-white flex flex-col justify-center items-center">
      <div className="text-center text-3xl font-semibold">Criar Flow</div>
      <div className="mt-8">
        <AddCircleOutlineIcon sx={{ transform: "scale(3)" }} />
      </div>
    </div>
  );
};

export default CreateFlow;
