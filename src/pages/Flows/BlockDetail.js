import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-to-clipboard";
import DefaultButton from "../../components/DefaultButton";
import AddVideoModal from "./AddVideoModal";
import BlocksData from "../../data/BlocksData";
import ButtonSet from "../Section/Flows/ButtonSet";
import Preview from "./Preview";

const BlockDetail = (props) => {
  const Block_id = props.Block_id;
  const [Block, setBlock] = useState(BlocksData[Block_id - 1]);
  const [times, setTimes] = useState(Block.itemNum);

  useEffect(() => {
    setBlock(BlocksData[Block_id - 1]);
    setTimes(Block.itemNum);
  }, [Block_id]);

  const copyToClipboard = () => {
    copy(Block.sourceCode);
    toast.success("Code Copied!");
  };

  return (
    <div className="pb-10">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full mt-4 flex justify-between">
        <div>
          <div className="w-[42vw] bg-white rounded-2xl px-8 py-4">
            <div className="text-blue-950 text-lg font-bold">{Block.title}</div>
            <div className="text-slate-400 text-sm font-normal">
              Adicione interatividade ao seu path
            </div>
            <AddVideoModal />
            <div className="mt-2">
              {Block.interactivity.map((item, index) =>
                index < times ? <ButtonSet item={item} Block_id={Block_id} /> : <div />
              )}
            </div>
            <div className="flex gap-6 mt-4 justify-center text-white">
              <div onClick={() => setTimes(times + 1)}>
                <DefaultButton btnName="Adicionar +" />
              </div>
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
            <div className="w-[100%] h-[10vh] bg-gray-200 rounded-md px-4 py-2 overflow-auto">
              {Block.sourceCode}
            </div>
            <div className="mt-2 flex justify-end" onClick={copyToClipboard}>
              <DefaultButton btnName="Copiar código" />
            </div>
          </div>
        </div>
        <div className="w-[24%] h-[52vh] bg-zinc-300 rounded-[20px] pt-20">
          {Block.interactivity.map((item, index) =>
            index < Block.itemNum ? (
              <Preview item={item} />
            ) : (
              <div />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BlockDetail;
