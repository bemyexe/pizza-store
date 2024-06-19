import { createSlice } from "@reduxjs/toolkit";
import { SortPropertyEnum, SortPrors } from "../../@types/sort-types";

const FILTER_SLICE_NAME = "filter";

export interface IFilterState {
  categoryId: number;
  sort: SortPrors;
  pageCount: number;
}

export const INITIAL_FILTER_STATE: IFilterState = {
  categoryId: 0,
  sort: {
    name: "popular (DESC)",
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
  pageCount: 1,
};

const filterSlice = createSlice({
  name: FILTER_SLICE_NAME,
  initialState: INITIAL_FILTER_STATE,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortProperty(state, action) {
      state.sort = action.payload;
    },
    setPage(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const { setCategoryId, setSortProperty, setPage } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
