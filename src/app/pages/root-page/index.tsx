import { Outlet } from "react-router-dom";
import Header from "../../components/header";

import "./style.scss";

const RootPage = () => {
  return (
    <div className="background-app">
      <div className="main-app">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootPage;
