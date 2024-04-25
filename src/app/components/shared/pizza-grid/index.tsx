import { useEffect, useState } from "react";
import { pizzaservice } from "../../../services/pizza.service/pizza.service";
import { PizzaItems } from "../../../services/pizza.service/response/pizza.response";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import PizzaItem from "../pizza-item";
import Skeleton from "../skeleton";

const PizzaGrid = () => {
  const [pizza, setPizza] = useState<PizzaItems>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPizza() {
    try {
      const res = await pizzaservice.getPizzaItems();
      setPizza(res);
    } catch {
      console.log("error");
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchPizza();
  }, []);

  return (
    <div className="pizza-grid">
      {isLoading
        ? [...new Array(6)].map(() => <Skeleton key={uuidv4()} />)
        : pizza.map((item) => <PizzaItem key={uuidv4()} {...item} />)}
    </div>
  );
};

export default PizzaGrid;
