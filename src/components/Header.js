import HeaderRightBar from "./HeaderRightBar";
import PageName from "./PageName";

const Header = (props) => {
  return (
    <div className="flex justify-between mt-10 px-8">
      <PageName name={props.name} />
      <HeaderRightBar search={props.search} />
    </div>
  );
};

export default Header;
