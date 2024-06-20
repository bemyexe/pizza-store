import { FC, useCallback, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import PizzaItem from "../pizza-item";
import Skeleton from "../shared/skeleton";

import { IPizzaItem } from "../../services/pizza.service/response/pizza.response";

import { useSelector } from "react-redux";
import { pizzaSelectors } from "../../../store/pizzas/pizza.selectors";
import { useAppDispatch } from "../../../store";

import { fetchPizzaData } from "../../../store/pizzas/pizza.thunk";
import { selectFilterState } from "../../../store/filter/filter.selectors";

const PizzaGrid: FC = () => {
  const pizza = useSelector(pizzaSelectors.selectPizza);

  const dispatch = useAppDispatch();
  const fetchStatus = useSelector(pizzaSelectors.selectPizzaStatus);

  const { categoryId, sort, pageCount, searchValue } =
    useSelector(selectFilterState);

  const sortBy = sort.sortProperty.replace("-", "");
  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue;

  const fetchPizza = useCallback(async () => {
    dispatch(
      fetchPizzaData({
        sortBy,
        order,
        category,
        search,
        currentPage: pageCount,
      })
    );
  }, [category, dispatch, order, pageCount, search, sortBy]);

  useEffect(() => {
    fetchPizza();
  }, [fetchPizza]);

  const skeleton = useMemo(
    () => [...new Array(3)].map(() => <Skeleton key={uuidv4()} />),
    []
  );
  const pizzas = Array.isArray(pizza)
    ? pizza.map((item: IPizzaItem) => <PizzaItem key={uuidv4()} {...item} />)
    : null;

  if (fetchStatus === "error") {
    return <div>ERROR</div>;
  }

  return (
    <div className="pizza-grid">
      {fetchStatus === "loading" ? skeleton : pizzas}
    </div>
  );
};

export default PizzaGrid;
