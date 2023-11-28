const MostClicked = () => {
  return (
    <div className="h-[100%] w-[24%] bg-white rounded-[20px] p-4">
      <div className="text-indigo-900 text-xl font-bold ml-2">Most Clicked Flow</div>
      <div className="w-[60%] h-[30px] text-slate-400 font-medium mt-8 border-solid border-b-2 relative">
        <div className="absolute left-0 top-0 ml-2">#Flow 1</div>
        <div className="absolute left-[72%]">Botão 1</div>
      </div>
      <div className="w-[60%] h-[30px] text-slate-400 font-medium mt-2 border-solid border-b-2 relative">
        <div className="absolute left-0 top-0 ml-2">#Flow 2</div>
        <div className="absolute left-[72%]">Botão 2</div>
      </div>
      <div className="w-[60%] h-[30px] text-slate-400 font-medium mt-2 border-solid border-b-2 relative">
        <div className="absolute left-0 top-0 ml-2">#Flow 3</div>
        <div className="absolute left-[72%]">Botão 3</div>
      </div>
    </div>
  );
};

export default MostClicked;
