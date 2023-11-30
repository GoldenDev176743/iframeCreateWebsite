const InputArea = (props) => {
  return(
    <div className={`w-[200px] h-[35px] rounded-md bg-gray-200 flex items-center pl-3 pr-1 font-semibold`}>
      <input type="text" defaultValue={props.defaultValue} className="w-[180px] outline-none bg-gray-200"></input>
    </div>
  )
}

export default InputArea;