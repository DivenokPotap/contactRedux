import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, fetchCreateContacts , fetchDeleteContacts, toggle } from "./contactOperations";

const handlePending = (state) => {
  state.isLoading = true
}
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};
  
const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    isLoading: false,
    isError: null,
    items: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(fetchCreateContacts.pending, handlePending)
      .addCase(fetchCreateContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items.push(action.payload);
      })
      .addCase(fetchCreateContacts.rejected, handleRejected)

      .addCase(fetchDeleteContacts.pending, handlePending)
      .addCase(fetchDeleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(fetchDeleteContacts.rejected, handleRejected)
      .addCase(toggle.pending, handlePending)
      .addCase(toggle.rejected, handleRejected)
      .addCase(toggle.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[index] = action.payload;

        state.isLoading = false;
        state.isError = null;
      });
  }
});
  

export const contactReducer = contactSlice.reducer