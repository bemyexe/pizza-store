import { useEffect, useState } from "react";
import { pizzaservice } from "../../../services/pizza.service/pizza.service";
import { PizzaItems } from "../../../services/pizza.service/response/pizza.response";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import PizzaItem from "../pizza-item";

const PizzaGrid = () => {
  const [pizza, setPizza] = useState<PizzaItems>([]);

  async function fetchPizza() {
    try {
      const res = await pizzaservice.getPizzaItems();
      setPizza(res);
    } catch {
      console.log("error");
    }
  }
  useEffect(() => {
    fetchPizza();
  }, []);

  return (
    <div className="pizza-grid">
      {pizza.map((item) => (
        <PizzaItem key={uuidv4()} {...item} />
      ))}
    </div>
  );
};

export default PizzaGrid;
