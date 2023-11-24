import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Progress from "./Progress";

const AccountInfo = () => {
  return (
    <div className="flex gap-12">
      <div className="w-[300px] h-[210px] bg-gradient-to-bl from-[#6640FF] to-[#8364FF] rounded-[20px] shadow text-white flex flex-col justify-center items-center">
        <div className="text-center text-3xl font-semibold">Criar Flow</div>
        <div className="mt-8">
          <AddCircleOutlineIcon sx={{ transform: "scale(3)" }} />
        </div>
      </div>
      <div className="w-[300px] h-[210px] bg-white rounded-[20px] relative">
        <div className="absolute left-[6%] top-[6%] text-indigo-900 text-[22px] font-bold">
          Total de visualizações
        </div>
        <div className="absolute right-[10%] bottom-[6%] text-indigo-900 text-[32px] font-bold">
          5.000
        </div>
      </div>
      <div className="w-[300px] h-[210px] bg-white rounded-[20px]">
        <div className="text-indigo-900 text-[22px] font-bold flex justify-between p-[6%]">
          <div>Plano Básico</div>
          <div className="w-[37px] h-[37px] bg-violet-50 rounded-[10px] text-center text-[#4318FF]">
            <MoreHorizIcon />
          </div>
        </div>
        <div className="px-[6%] py-[2%] pb-[1%]">
          <Progress name="Armazenamento" value="25.6/50 GB" percent="51.2" />
        </div>
        <div className="px-[6%] py-[1%]">
          <Progress name="Visualizações" value="5.000/20.000" percent="25" />
        </div>
        <div className="px-[6%] py-[1%]">
          <Progress name="Domínios" value="1/1" percent="100" />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
