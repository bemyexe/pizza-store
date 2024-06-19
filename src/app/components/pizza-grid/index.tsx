import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import PizzaItem from "../pizza-item";
import Skeleton from "../shared/skeleton";

import { IPizzaItem } from "../../services/pizza.service/response/pizza.response";
import { pizzaservice } from "../../services/pizza.service/pizza.service";
import { useSelector } from "react-redux";
import { pizzaSelectors } from "../../../store/pizzas/pizza.selectors";
import { useAppDispatch } from "../../../store";
import { setPizza } from "../../../store/pizzas/pizza.slice";

const PizzaGrid: FC = () => {
  const pizza = useSelector(pizzaSelectors.selectPizza);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setIsLoading(true);
        const res = await pizzaservice.getPizzaItems();
        dispatch(setPizza(res));
      } catch {
        console.log("gg");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPizza();
  }, [dispatch]);

  const skeleton = [...new Array(3)].map(() => <Skeleton key={uuidv4()} />);
  const pizzas = pizza.map((item: IPizzaItem) => (
    <PizzaItem key={uuidv4()} {...item} />
  ));

  return <div className="pizza-grid">{isLoading ? skeleton : pizzas}</div>;
};

export default PizzaGrid;
