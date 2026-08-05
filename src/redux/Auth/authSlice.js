import { createSlice } from "@reduxjs/toolkit";
import { addGenericMatcher } from "../genericMatcher";
import {
  fetchLogInUser,
  fetchRefreshUser,
  fetchSingUpUser,
  fetchLogOutUser,
} from "./authOperations";
import storage from "redux-persist/es/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: null,
  isRefreshing: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      state.isLoggedIn = false;
      state.user = { name: null, email: null };
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingUpUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchLogInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchRefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchLogOutUser.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });

    addGenericMatcher(builder);
  },
});

export const { logOut } = authSlice.actions;
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const authPersistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
