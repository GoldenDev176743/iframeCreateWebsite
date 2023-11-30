import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { KeyboardArrowDown } from "@material-ui/icons";

const DropButton2 = (props) => {
  const [type, setType] = useState(props.default);

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <FormControl sx={{ width: 200 }}>
      <Select
        value={type}
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
        <MenuItem value="block1">Block #1</MenuItem>
        <MenuItem value="block2">Block #2</MenuItem>
        <MenuItem value="block3">Block #3</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DropButton2;
