import InputArea from "../Section/Flows/InputArea";
import DefaultButton from "../../components/DefaultButton";
import BoxText from "../../components/BoxText";
import AddVideoModal from "./AddVideoModal";
import BlocksData from "../../data/BlocksData";
import DropButton1 from "../Section/Flows/DropButton1";
import DropButton2 from "../Section/Flows/DropButton2";

const BlockDetail = (props) => {
  const Block = props.Block;

  return (
    <div>
      {BlocksData.filter((item) => item.id.includes(Block)).map((item) => (
        <div className="w-full mt-4 flex justify-between">
          <div>
            <div className="w-[42vw] bg-white rounded-2xl px-8 py-4">
              <div className="text-blue-950 text-lg font-bold">
                {item.title}
              </div>
              <div className="text-slate-400 text-sm font-normal">
                Adicione interatividade ao seu path
              </div>
              <AddVideoModal />
              <div className="mt-2 flex justify-between">
                <div className="flex gap-1">
                  <BoxText label="A" />
                  <DropButton1 default="block" />
                  <DropButton2 default="block2" />
                </div>
                <div className="w-9 h-[35px] bg-[#4318FF] rounded-md text-white flex justify-center items-center" />
              </div>
              <div className="mt-1 flex justify-between">
                <div className="flex gap-1">
                  <BoxText label="B" />
                  <DropButton1 default="text" />
                  <InputArea defaultValue="Lorem Ipsum" />
                </div>
                <div className="w-9 h-[35px] bg-[#4318FF] rounded-md text-white flex justify-center items-center" />
              </div>
              <div className="mt-1 flex justify-between">
                <div className="flex gap-1">
                  <BoxText label="C" />
                  <DropButton1 default="link" />
                  <InputArea defaultValue="https://milliondollar.com" />
                </div>
                <div className="w-9 h-[35px] bg-[#4318FF] rounded-md text-white flex justify-center items-center" />
              </div>
              <div className="flex gap-6 mt-4 justify-center text-white">
                <DefaultButton btnName="Adicionar +" />
                <DefaultButton btnName="Salvar" color="special" />
              </div>
            </div>
            <div className="w-[42vw] bg-white rounded-[20px] px-8 py-4 mt-4">
              <div className="text-blue-950 text-lg font-bold">
                Código para Embedar
              </div>
              <div className="text-slate-400 text-sm font-normal">
                Copie o código e adicione no head da sua página.
              </div>
              <div className="w-[100%] h-[10vh] bg-gray-200 rounded-md px-4 py-2">
                {item.sourceCode}
              </div>
              <div className="mt-2 flex justify-end">
                <DefaultButton btnName="Copiar código" />
              </div>
            </div>
          </div>
          <div className="w-[24%] h-[52vh] bg-zinc-300 rounded-[20px]">
            <div className="w-[88%] h-[28px] bg-[#4318FF] rounded-md border border-black mx-auto mt-32 pl-10 relative text-white">
              Lorem Ipsum
              <div className="absolute top-[-10px] left-[-1px] text-black bg-white w-[20px] h-[20px] rounded-[6px] border border-black flex items-center justify-center">
                B
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockDetail;
