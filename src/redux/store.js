import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: { contacts: contactReducer, filters: filterReducer },
  middleware: (getDefautMiddleware) => {
    return getDefautMiddleware({
      serializableCheck: { ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]},
})
  }
});

export const persistor = persistStore(store);
