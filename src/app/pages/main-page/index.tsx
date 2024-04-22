import Header from "../../components/header";
import ToggleBar from "../../components/shared/toggle-bar";
import "./style.scss";

const MainPage = () => {
  return (
    <div className="background-app">
      <div className="main-app">
        <Header />
        <ToggleBar />
        <div>app</div>
      </div>
    </div>
  );
};

export default MainPage;
