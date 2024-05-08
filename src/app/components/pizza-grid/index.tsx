import { FC, useContext, useEffect, useState } from "react";
import { pizzaservice } from "../../services/pizza.service/pizza.service";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import PizzaItem from "../pizza-item";
import Skeleton from "../shared/skeleton";
import { SomeContext } from "../../pages/root-page";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../store/slices/pizzaSlice";

const PizzaGrid: FC = () => {
  const { state } = useContext(SomeContext);

  const pizza = useSelector((state) => state.pizza.items);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPizza() {
      try {
        setIsLoading(true);
        const res = await pizzaservice.getPizzaItems();
        dispatch(setItems(res));
      } catch {
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchPizza();
  }, [dispatch]);

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
