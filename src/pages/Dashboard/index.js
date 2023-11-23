// import components
import Header from "../../components/Header";
import TopBar from "./TopBar";
import Content from "./Content";

const Dashboard = () => {
  return (
    <div>
      <Header name="Flows" search="hidden" />
      <TopBar />
      <Content />
    </div>
  );
};

export default Dashboard;
