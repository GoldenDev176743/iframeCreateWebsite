const InputArea = (props) => {
  return(
    <div className={`w-[212px] h-[35px] rounded-md bg-gray-200 flex items-center pl-3 pr-1 font-semibold border border-solid border-[#acadb0]`}>
      <input type="text" defaultValue={props.default} className="w-[190px] outline-none bg-gray-200"></input>
    </div>
  )
}

export default InputArea;