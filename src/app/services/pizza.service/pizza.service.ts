import { PizzaItems } from "./response/pizza.response";

class PizzaSerivce {
  async getPizzaItems(
    sortBy: string,
    order: string,
    category: string,
    search: string,
    currentPage: number
  ): Promise<PizzaItems> {
    return fetch(
      `https://6628ffd654afcabd0737cd97.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&search=${search}`
    ).then((res) => res.json());
  }
}

export default PizzaSerivce;

export const pizzaservice = new PizzaSerivce();
