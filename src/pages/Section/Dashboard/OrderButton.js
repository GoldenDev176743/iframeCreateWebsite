import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider } from "@mui/system";
import theme from "../../../theme";
import { ArrowDropDown } from "@material-ui/icons";

const OrderButton = () => {
  const [tag, setTag] = useState("");

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ width: 106 }} size="small" color="primary">
        <Select
          value={tag}
          onChange={handleChange}
          sx={{ height: 36, bgcolor: "#11047A", color: "white", borderRadius: "20px", fontSize: "14px" }}
          displayEmpty
          IconComponent={ArrowDropDown}
        >
          <MenuItem value="">Order by</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="creation">Creation</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}

export default OrderButton;