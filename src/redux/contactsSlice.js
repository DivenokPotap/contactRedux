import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, fetchCreateContacts , fetchDeleteContacts, toggle } from "./contactOperations";
import { addGenericMatcher } from "./genericMatcher";
import { selectFilters } from "./selectors";

const contactsAdapter = createEntityAdapter({
  sortComparer: (a,b) => a.name.localeCompare(b.name),
})

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactsAdapter.getInitialState({
    isLoading: false,
    isError: null,
  }),
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        contactsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCreateContacts.fulfilled, (state, action) => {
      contactsAdapter.addOne(state, action.payload);
      })
      .addCase(fetchDeleteContacts.fulfilled, (state, action) => {
        contactsAdapter.removeOne(state, action.payload.id);
      })
      .addCase(toggle.fulfilled, (state, action) => {
       contactsAdapter.upsertOne(state, action.payload);
      });
    addGenericMatcher(builder)
  }
});

export const { selectAll: selectContacts, selectById: selectContactById } = contactsAdapter.getSelectors((state) => state.contacts);
export const selectVisibleAdapterContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filters) => {
    return {
      contacts: contacts.filter((contact) => contact.name.toLowerCase().includes(filters.toLowerCase()),
      ),
      filters,
    };
  },
);

export const contactReducer = contactSlice.reducer
