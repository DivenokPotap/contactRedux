import { combineReducers, createStore } from "redux"
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactReducer } from "./contactsReducer";
import { filtersReducer } from "./filterReduce";

  const enhancer = devToolsEnhancer()

  const rootReducer = combineReducers({
    contacts: contactReducer,
    filters: filtersReducer,
  });

export const store = createStore(rootReducer,enhancer)