import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as contactAPI from "../services/contactServices"

export const fetchContacts = createAsyncThunk(
  "contactInitialState/fetchContacts",
  async (_, {rejectWithValue}) => {
    try {
      const resp = await contactAPI.getAllContacts();
        return resp;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCreateContacts = createAsyncThunk(
  "contactInitialState/fetchCreateContacts",
  async (userData, { rejectWithValue }) => {
    try {
      return await contactAPI.createContact(userData);
    } catch (error) {
    return rejectWithValue(error);
    }
  }
);

export const fetchDeleteContacts = createAsyncThunk(
  "contactInitialState/fetchDeleteContacts",
  async (id, { rejectWithValue }) => {
    try {
      const resp = await contactAPI.deleteContactById(id);
      return resp;
    } catch (error) {
     return rejectWithValue(error);
    }
  }
);

export const toggle = createAsyncThunk(
  "contacts/toggle",
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(`/contactInitialState/${contact.id}`, {
        checked: !contact.checked,
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);