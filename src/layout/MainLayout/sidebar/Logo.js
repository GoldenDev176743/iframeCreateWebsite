import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        width: "70%",
        margin: "10px auto",
      }}
    >
      <Box
        sx={{
          padding: "20px 40px",
          fontSize: "40px",
          fontWeight: "900",
          color: "green",
          textAlign: "center",
          backgroundColor: "lightyellow",
          border: "1px solid gray",
          borderRadius: "10px",
        }}
      >
        LOGO
      </Box>
    </Box>
  );
};

export default Logo;
