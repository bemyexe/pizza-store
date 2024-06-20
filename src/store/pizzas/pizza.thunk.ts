import { createAsyncThunk } from "@reduxjs/toolkit";
import { pizzaservice } from "../../app/services/pizza.service/pizza.service";

interface FetchPizzaParams {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: number;
}

export const fetchPizzaData = createAsyncThunk(
  "pizza/fetchPizzaStatus",
  async (params: FetchPizzaParams) => {
    const { sortBy, order, category, search, currentPage } = params;
    return pizzaservice.getPizzaItems(
      sortBy,
      order,
      category,
      search,
      currentPage
    );
  }
);
