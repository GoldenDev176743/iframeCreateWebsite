import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IconButton } from "@mui/material";
import SearchBar from "./SearchBar";

const HeaderRightBar = (props) => {
  return (
    <div className="bg-white rounded-[30px] shadow flex items-center justify-between px-4 py-2">
      <div className="text-black text-sm font-normal font-['DM Sans'] leading-tight">
        Welcome Marcelo!
      </div>
      <div className={ props.search === "hidden" ? "hidden" : "block" }>
        <SearchBar />
      </div>
      <IconButton>
        <NotificationsNoneIcon />
      </IconButton>
      <IconButton>
        <BedtimeIcon />
      </IconButton>
      <IconButton>
        <InfoOutlinedIcon />
      </IconButton>
      <div className="w-[41px] ml-4 cursor-pointer">
        <img src="./avatar.jpg" alt="avatar" className="rounded-full" />
      </div>
    </div>
  );
};

export default HeaderRightBar;
