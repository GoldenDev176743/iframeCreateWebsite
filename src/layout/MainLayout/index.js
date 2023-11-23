// import pages
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  return (
    <div className="flex w-full m-0">
      <div className="w-[15%] min-w-[200px]">
        <Sidebar />
      </div>
      <div className="w-[85%] h-screen bg-[#F4F7FE]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
