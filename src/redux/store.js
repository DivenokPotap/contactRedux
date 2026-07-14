import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { FiltersPersistedReducer } from "./filterSlice";
import { persistStore, persistReducer } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: { contacts: contactReducer, filters: FiltersPersistedReducer },
  middleware: (getDefautMiddleware) => {
    return getDefautMiddleware({
      serializableCheck: { ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]},
})
  }
});

export const persistor = persistStore(store)