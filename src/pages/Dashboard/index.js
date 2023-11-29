// import components
import Header from "../../components/Header";
import TopBar from "./TopBar";
import Content from "./Content";
import { useState } from "react";

const Dashboard = () => {

  const [keyWord, setKeyWord] = useState("");

  return (
    <div>
      <Header name="Dashboard" />
      <TopBar setKeyWord={setKeyWord} />
      <Content keyWord={keyWord} />
    </div>
  );
};

export default Dashboard;
