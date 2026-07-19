import { createSlice } from "@reduxjs/toolkit"
import { statusFilters } from "./constance"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";


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

const persistConfig = {
  key: "filters",
  storage,
};

export const FiltersPersistedReducer = persistReducer(persistConfig,filterSlice.reducer);

