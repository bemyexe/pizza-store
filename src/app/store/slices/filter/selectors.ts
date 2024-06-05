import { RootStateBase } from "../../store";

export const selectFilter = (state: RootStateBase) => state.filter;
export const selectFilterCategoryId = (state: RootStateBase) =>
  state.filter.categoryId;
export const selectSort = (state: RootStateBase) => state.filter.sort;
export const selectSortType = (state: RootStateBase) =>
  state.filter.sort.sortType;
