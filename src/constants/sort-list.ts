import { SortPropertyEnum, SortPrors } from "../@types/sort-types";

export const LIST: SortPrors[] = [
  { name: "popular (DESC)", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "popular (ASC)", sortProperty: SortPropertyEnum.RATING_ASC },
  { name: "price (DESC)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "price (ASC)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "letters (DESC)", sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: "letters (ASC)", sortProperty: SortPropertyEnum.TITLE_ASC },
];
