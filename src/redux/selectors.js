import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constance.js"

export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectIsError = (state) => state.contacts.isError;

export const selectStatusFilter = (state) => state.filters.status;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectStatusFilter],
    (contacts, statusFilter) => {
    console.log("selectVisibleContacts", Date.now());
    switch (statusFilter) {
      case statusFilters.unchecked:
        return contacts.filter((contact) => !contact.checked);
      case statusFilters.checked:
        return contacts.filter((contact) => contact.checked);
      default:
        return contacts;
    }
  }
);