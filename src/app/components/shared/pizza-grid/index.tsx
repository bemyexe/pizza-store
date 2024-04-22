import pizza from "../../../../data/pizza-variables/pizza-variables.json";
import PizzaItem from "../pizza-item";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";

const PizzaGrid = () => {
  return (
    <div className="pizza-grid">
      {pizza.map((item) => (
        <PizzaItem key={uuidv4()} {...item} />
      ))}
    </div>
  );
};

export default PizzaGrid;
