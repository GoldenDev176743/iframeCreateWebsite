import { useEffect, useState } from "react";
import BoxText from "../../../components/BoxText";
import DropButton1 from "./DropButton1";
import DropButton2 from "./DropButton2";
import InputArea from "./InputArea";
import ColorPickerBox from "./ColorPicker";

const ButtonSet = (props) => {
  const item = props.item;
  const Block_id = props.Block_id;
  const [inputType, setInputType] = useState(item.defaultType);

  useEffect(() => {
    setInputType(item.defaultType);
  }, [Block_id]);

  return (
    <div className="mt-1 flex justify-between">
      <div className="flex gap-1">
        <BoxText label={item.label} />
        <DropButton1 default={item.defaultType} setInputType={setInputType} Block_id={Block_id} />
        {inputType === "block" ? (
          <DropButton2 default={item.defaultValue} />
        ) : (
          <InputArea default={item.defaultValue} />
        )}
      </div>
      <ColorPickerBox default={item.defaultColor} />
    </div>
  );
};

export default ButtonSet;
