import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const BlockButton = (props) => {
  return (
    <>
    <div className={`h-[35px] rounded-md bg-gray-200 flex items-center justify-between pl-3 pr-1 font-semibold ${props.width === "small" ? "w-[108px]" : "w-[200px]"}`}>
      {props.title}
      <KeyboardArrowDownOutlinedIcon />
    </div>
    </>
  );
}

export default BlockButton;