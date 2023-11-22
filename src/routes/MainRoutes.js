// project import
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
// pages routing


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Dashboard />
    }
  ],
};

export default MainRoutes;
