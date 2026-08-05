import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authAPI from "../../services/authService";
import { setToken, clearToken } from "../../services/api";

export const fetchSingUpUser = createAsyncThunk(
  "auth/fetchSingUpUser",
  async (userData, { rejectWithValue }) => {
    try {
      const resp = await authAPI.signUp(userData);
      setToken(resp.token);
      const user = await authAPI.getCurrent();
      return {
        ...resp,
        user,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchLogInUser = createAsyncThunk(
  "auth/fetchLogInUser",
  async (userData, { rejectWithValue }) => {
    try {
      const resp = await authAPI.signIn(userData);
      setToken(resp.token);
      const user = await authAPI.getCurrent();
      return {
        ...resp,
        user,
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchRefreshUser = createAsyncThunk(
  "auth/fetchRefreshUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      if (!token) {
        return rejectWithValue("failed to fetch user");
      }
      setToken(token);
      return await authAPI.getCurrent();
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const fetchLogOutUser = createAsyncThunk(
  "auth/fetchLogOutUser",
  async (_, { rejectWithValue }) => {
    try {
      await authAPI.signOut();
      clearToken();
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
