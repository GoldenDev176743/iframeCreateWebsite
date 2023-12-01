import { useState } from "react";

const ColorPickerBox = () => {
  const [color, setColor] = useState("#4318FF");
  return (
    <div>
      {/* <div className="w-9 h-[35px] bg-[#4318FF] rounded-md text-white flex justify-center items-center"></div> */}
      <input
        type="color"
        id="favcolor"
        name="favcolor"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-9"
      />
    </div>
  );
};

export default ColorPickerBox;
