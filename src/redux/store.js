import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./Contacts/contactsSlice";
import { filterReducer } from "./filterSlice";
import { persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authPersistedReducer } from "./Auth/authSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
    auth: authPersistedReducer,
  },
  middleware: (getDefautMiddleware) => {
    return getDefautMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);