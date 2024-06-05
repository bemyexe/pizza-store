import { RootStateBase } from "../../store";

export const selectPizzaData = (state: RootStateBase) => state.pizza.items;
