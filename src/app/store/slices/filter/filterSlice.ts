import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    categoryId: 0,
    sort: {
      sortType: "popular",
    },
  },
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort.sortType = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;
export default filterSlice.reducer;
