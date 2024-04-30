import { FC, useContext, useEffect, useState } from "react";
import { pizzaservice } from "../../../services/pizza.service/pizza.service";
import { PizzaItems } from "../../../services/pizza.service/response/pizza.response";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import PizzaItem from "../pizza-item";
import Skeleton from "../skeleton";
import { SomeContext } from "../../../pages/root-page";

const PizzaGrid: FC = () => {
  const { state } = useContext(SomeContext);

  const [pizza, setPizza] = useState<PizzaItems>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPizza() {
    try {
      setIsLoading(true);
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

  const skeleton = [...new Array(3)].map(() => <Skeleton key={uuidv4()} />);
  const pizzas = pizza
    .filter((item) => {
      if (item.title.toLowerCase().includes(state.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item) => <PizzaItem key={uuidv4()} {...item} />);

  return <div className="pizza-grid">{isLoading ? skeleton : pizzas}</div>;
};

export default PizzaGrid;
