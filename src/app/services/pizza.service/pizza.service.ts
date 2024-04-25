import { PizzaItems } from "./response/pizza.response";

class PizzaSerivce {
  async getPizzaItems(): Promise<PizzaItems> {
    return fetch("https://6628ffd654afcabd0737cd97.mockapi.io/item").then(
      (response) => response.json()
    );
  }
}

export default PizzaSerivce;

export const pizzaservice = new PizzaSerivce();
