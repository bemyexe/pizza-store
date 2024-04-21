import Header from "../../components/header";
import ToggleBar from "../../components/shared/toggle-bar";
import "./style.scss";

const MainPage = () => {
  return (
    <div className="background-app">
      <div className="main-app">
        <Header />
        <div>app</div>
        <ToggleBar />
      </div>
    </div>
  );
};

export default MainPage;
