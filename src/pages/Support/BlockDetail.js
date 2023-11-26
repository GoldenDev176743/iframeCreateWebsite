import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DropButton from "./Button/DropButton";
import InputArea from "./Button/InputArea";
import DefaultButton from "../../components/DefaultButton";

const BlockDetail = () => {
  return (
    <div className="w-[100%] mt-4 flex justify-between">
      <div>
        <div className="w-[42vw] bg-white rounded-[20px] px-8 py-4">
          <div className="text-blue-950 text-lg font-bold font-['DM Sans'] leading-[30px]">
            Block 1
          </div>
          <div className="text-slate-400 text-sm font-normal font-['DM Sans'] leading-tight">
            Adicione interatividade ao seu path
          </div>
          <div className="mt-2 flex items-center">
            <div className="w-9 h-[35px] bg-indigo-900 rounded-md text-white flex justify-center items-center">
              <AddCircleOutlineIcon />
            </div>
            <div className="text-black text-sm font-bold ml-3">Add video</div>
          </div>
          <div className="mt-2 flex justify-between">
            <div className="flex">
              <div className="w-9 h-[35px] bg-indigo-900 rounded-md text-white flex justify-center items-center">
                A
              </div>
              <div className="ml-1">
                <DropButton width="110px" title="BLOCK" />
              </div>
              <div className="ml-1">
                <DropButton width="220px" title="Block #2" />
              </div>
            </div>
            <div className="w-9 h-[35px] bg-[#4318FF] rounded-md text-white flex justify-center items-center" />
          </div>
          <div className="mt-1 flex justify-between">
            <div className="flex">
              <div className="w-9 h-[35px] bg-indigo-900 rounded-md text-white flex justify-center items-center">
                B
              </div>
              <div className="ml-1">
                <DropButton width="110px" title="TEXTO" />
              </div>
              <div className="ml-1">
                <InputArea width="220px" value="Lorem Ipsum" />
              </div>
            </div>
            <div className="w-9 h-[35px] bg-[#4318FF] rounded-md text-white flex justify-center items-center" />
          </div>
          <div className="mt-1 flex justify-between">
            <div className="flex">
              <div className="w-9 h-[35px] bg-indigo-900 rounded-md text-white flex justify-center items-center">
                C
              </div>
              <div className="ml-1">
                <DropButton width="110px" title="LINK" />
              </div>
              <div className="ml-1">
                <InputArea width="220px" value="https://milliondollar.com" />
              </div>
            </div>
            <div className="w-9 h-[35px] bg-[#4318FF] rounded-md text-white flex justify-center items-center" />
          </div>
          <DefaultButton btnName="Adicionar +" />
          <DefaultButton btnName="Salvar" color="special" />
        </div>
      </div>
      <div className="w-[28%] h-[92%] bg-zinc-300 rounded-[20px]">
        <div className="w-[88%] h-[28px] bg-[#4318FF] rounded-md border border-black mx-auto mt-32 pl-10 relative text-white">
          Lorem Ipsum
          <div className="absolute top-[-10px] left-[-1px] text-black bg-white w-[20px] h-[20px] rounded-[6px] border border-black flex items-center justify-center">
            B
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockDetail;
