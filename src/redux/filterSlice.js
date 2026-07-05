import { createSlice } from "@reduxjs/toolkit"
import { statusFilters } from "./constance"

const filterInitialState = {
    status: statusFilters.all
}

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setStatusFilter } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;