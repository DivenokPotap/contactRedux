import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./Contacts/contactsApi";
import { authApi } from "./Auth/authApi";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./Auth/authSlice";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    filters: filterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    authApi.middleware
  ],
});
