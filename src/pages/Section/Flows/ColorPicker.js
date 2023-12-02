import { useState } from "react";

const ColorPickerBox = (props) => {
  const [color, setColor] = useState(props.default);

  return (
    <div>
      <input
        type="color"
        id="favcolor"
        name="favcolor"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-9 h-9 m-0 bg-white"
      />
    </div>
  );
};

export default ColorPickerBox;
