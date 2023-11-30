// import components
import Header from "../../components/Header";
import TopBar from "./TopBar";
import Content from "./Content";
import { useState } from "react";

const Dashboard = () => {

  const [searchKey, setSearchKey] = useState("");

  return (
    <div>
      <Header name="Dashboard" />
      <TopBar setSearchKey={setSearchKey} />
      <Content searchKey={searchKey} />
    </div>
  );
};

export default Dashboard;
