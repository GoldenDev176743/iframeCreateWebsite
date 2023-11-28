import { ThemeProvider } from "@mui/material";
import Button from "@mui/material/Button";
import theme from "../theme";

const DefaultButton = (props) => {
  return(
    <ThemeProvider theme={theme}>
      <Button
        className="!min-w-[100px] !h-[36px] !rounded-full !normal-case"
        variant="contained"
        color={props.color}
      >
        {props.btnName}
      </Button>
    </ThemeProvider>
  )
}

export default DefaultButton;
