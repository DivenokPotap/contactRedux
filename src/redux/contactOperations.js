import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as contactAPI from "../services/contactServices"

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await contactAPI.getAllContacts();
      return resp;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchCreateContacts = createAsyncThunk(
  "contacts/fetchCreateContacts",
  async (userData, { rejectWithValue }) => {
    try {
      return await contactAPI.createContact(userData);
    } catch (error) {
return rejectWithValue(error.response?.data || error.message);    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  "contacts/fetchDeleteContacts",
  async (id, { rejectWithValue }) => {
    try {
      const resp = await contactAPI.deleteContactById(id);
      return resp;
    } catch (error) {
return rejectWithValue(error.response?.data || error.message);    }
  }
);
