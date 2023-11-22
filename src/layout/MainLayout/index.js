// import pages
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { Box } from "@mui/material";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  return (
    <>
    {/* <div>fowiejf</div> */}
    <Box sx={{ display: 'flex', width: '100%', margin: '0' }}>
      <Box sx={{ width: '15%' }}>
        <Sidebar />
      </Box>
      <Box sx={{ width: '85%', height: '100vh', backgroundColor: '#F4F7FE' }}>
        <Outlet />
      </Box>
    </Box>
    </>
  );
};

export default MainLayout;
