import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter(state, action) {
      if (state.includes(action.payload)) return;
      state.push(action.payload);
    },
    removeFilter(state, action) {
      const tagName = action.payload;
      return state.filter((tag) => tag !== tagName);
    },
    clearAllFilters(state, action) {
      return initialState;
    },
  },
});

export const { addFilter, removeFilter, clearAllFilters } = filterSlice.actions;

export default filterSlice.reducer;
