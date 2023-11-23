import SearchIcon from "@mui/icons-material/Search";

const SearchBar = (props) => {
  return (
    <>
      <div className={`w-[223px] h-[41px] bg-slate-200 rounded-full flex items-center mx-2 px-4 ${props.bg}`}>
        <SearchIcon fontSize="small" />
        <input type="text" className="outline-none bg-inherit ml-2 w-full" placeholder="Search" />
      </div>
    </>
  );
};

export default SearchBar;
