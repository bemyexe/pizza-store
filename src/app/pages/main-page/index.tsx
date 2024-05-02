import PizzaGrid from "../../components/shared/pizza-grid";
import Sort from "../../components/shared/sort";
import ToggleBar from "../../components/shared/toggle-bar";
import { TextXLRegular } from "../../components/shared/typography";

import "./style.scss";

const MainPage = () => {
  return (
    <>
      <div className="toggle-sort">
        <ToggleBar />
        <Sort />
      </div>
      <div className="main-content">
        <TextXLRegular>MENU</TextXLRegular>
        <PizzaGrid />
      </div>
    </>
  );
};

export default MainPage;
