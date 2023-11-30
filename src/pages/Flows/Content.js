import Blocks from "./Blocks";
import BlockDetail from "./BlockDetail";
import { useState } from "react";

const Content = () => {

  const [Block, setBlock] = useState("01");

  return (
    <div className="mt-10 px-10 w-[1421px]">
      <Blocks setBlock={setBlock} />
      <BlockDetail Block={Block} />
    </div>
  );
};

export default Content;
