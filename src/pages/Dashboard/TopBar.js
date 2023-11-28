import Button from "../../components/DefaultButton";
import SearchBar from "../../components/SearchBar";

const TopBar = () => {
  return (
    <div className="flex h-[40px] justify-between mt-6 px-12">
      <div>
        <Button btnName="+ Create Flow" />
      </div>
      <div className="flex gap-6 items-center">
        <Button btnName="Filter by" />
        <Button btnName="Order by" />
        <SearchBar bg="bg-white" />
      </div>
    </div>
  );
};

export default TopBar;
