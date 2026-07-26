import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: "",
  reducers: {
    inputChangeFilter: (state, action) => action.payload,
  },
});

export const { inputChangeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
