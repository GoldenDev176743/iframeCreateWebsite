import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { KeyboardArrowDown } from "@material-ui/icons";

const DropButton1 = (props) => {

  const setInputType = props.setInputType;
  const [buttonType, setButtonType] = useState(props.default);

  useEffect(() => {
    setButtonType(props.default)
  }, [props.default]);

  const handleChange = (e) => {
    setButtonType(e.target.value);
    setInputType(e.target.value);
  };

  return (
    <FormControl sx={{ width: 108 }}>
      <Select
        value={buttonType}
        onChange={handleChange}
        sx={{
          height: "35px",
          bgcolor: "#e5e7eb",
          fontWeight: 600,
          borderRadius: "6px",
          fontSize: "14px",
        }}
        IconComponent={KeyboardArrowDown}
      >
        <MenuItem value="block">BLOCK</MenuItem>
        <MenuItem value="text">TEXTO</MenuItem>
        <MenuItem value="link">LINK</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropButton1;
