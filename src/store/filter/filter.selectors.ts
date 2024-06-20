import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IFilterState } from "./filter.slice";

export const selectFilterState: (state: RootState) => IFilterState = (state) =>
  state.filterState;

const selectCategoryId = createSelector(
  selectFilterState,
  (state) => state.categoryId
);

const sortName = createSelector(selectFilterState, (state) => state.sort.name);
const sortProperty = createSelector(
  selectFilterState,
  (state) => state.sort.sortProperty
);

const pageCount = createSelector(selectFilterState, (state) => state.pageCount);
const searchValue = createSelector(
  selectFilterState,
  (state) => state.searchValue
);

export const filterSelectors = {
  selectCategoryId,
  sortName,
  sortProperty,
  pageCount,
  searchValue,
};
