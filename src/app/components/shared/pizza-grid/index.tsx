import pizza from "../../../../data/pizza-variables/pizza-variables.json";

const PizzaGrid = () => {
  return <>{pizza.map((item) => item.title)}</>;
};

export default PizzaGrid;
