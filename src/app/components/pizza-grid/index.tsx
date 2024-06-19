import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import PizzaItem from "../pizza-item";
import Skeleton from "../shared/skeleton";

import { IPizzaItem } from "../../services/pizza.service/response/pizza.response";
import { pizzaservice } from "../../services/pizza.service/pizza.service";

const PizzaGrid: FC = () => {
  const [pizza, setState] = useState<IPizzaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setIsLoading(true);
        const res = await pizzaservice.getPizzaItems();
        setState(res);
      } catch {
        console.log("gg");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPizza();
  }, []);

  const skeleton = [...new Array(3)].map(() => <Skeleton key={uuidv4()} />);
  const pizzas = pizza.map((item: IPizzaItem) => (
    <PizzaItem key={uuidv4()} {...item} />
  ));

  return <div className="pizza-grid">{isLoading ? skeleton : pizzas}</div>;
};

export default PizzaGrid;
