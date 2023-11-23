import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#11047A",
    },
  },
});

const DefaultButton = (props) => {
  return(
    <ThemeProvider theme={theme}>
      <Button
        className="!min-w-[100px] !rounded-full !normal-case"
        variant="contained"
        color="primary"
      >
        {props.btnName}
      </Button>
    </ThemeProvider>
  )
}

export default DefaultButton;