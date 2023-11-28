import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

// constant
const menuItem = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Flows", path: "/flows" },
  { title: "Analytics", path: "/analytics" },
  { title: "Suporte", path: "/support" },
  { title: "Conta", path: "/account" },
];

const CommonStyle =
  "pl-8 flex justify-between hover:text-[#4318FF] hover:font-bold cursor-pointer";
const ItemSelectStyle1 = "flex items-center py-2 text-[#4318FF] font-bold";
const ItemNormalStyle1 = "flex items-center py-2";
const ItemSelectStyle2 = "ml-3 text-[#2B3674]";
const ItemNormalStyle2 = "ml-3";
const ItemSelectStyle3 = "w-1 h-9 bg-[#4318FF] rounded-[25px] block";
const ItemNormalStyle3 = "";

const Menu = () => {
  const [state, setState] = useState("Dashboard");
  const navigate = useNavigate();

  return (
    <div className="mt-5 font-semibold text-[#A3AED0]">
      {menuItem.map((item) => (
        <div
          className={CommonStyle}
          onClick={() => {
            navigate(`${item.path}`);
            setState(item.title);
          }}
        >
          <div
            className={
              state === item.title ? ItemSelectStyle1 : ItemNormalStyle1
            }
          >
            {item.title === "Dashboard" ? (
              <HomeIcon />
            ) : item.title === "Flows" ? (
              <ShoppingCartRoundedIcon />
            ) : item.title === "Analytics" ? (
              <BarChartOutlinedIcon />
            ) : item.title === "Suporte" ? (
              <DashboardIcon />
            ) : (
              <PersonIcon />
            )}
            <div
              className={
                state === item.title ? ItemSelectStyle2 : ItemNormalStyle2
              }
            >
              {item.title}
            </div>
          </div>
          <div
            className={
              state === item.title ? ItemSelectStyle3 : ItemNormalStyle3
            }
          />
        </div>
      ))}
      <div
        className={CommonStyle}
        onClick={() => {
          navigate("/dashboard");
          setState("Dashboard");
        }}
      >
        <div className={ItemNormalStyle1}>
          <LockIcon />
          <div className={ItemNormalStyle2}>Log out</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
