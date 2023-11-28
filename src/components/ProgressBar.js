const ProgressBar = (props) => {
  return (
    <div className="w-full bg-[#F4F7FE] h-[10px] rounded-full">
      <div
        className={`w-[${props.percent}] bg-[#4318FF] h-[10px] rounded-full`}
      />
    </div>
  );
};

export default ProgressBar;
