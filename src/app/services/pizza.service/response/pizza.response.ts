export interface IPizzaItem {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export type PizzaItems = IPizzaItem[] | string;
