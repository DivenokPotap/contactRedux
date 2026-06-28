import { statusFilters } from "./constance"

export const setStatusFilter = (value) => {
    return {
        type : "filters/setStatusFilter",
        payload : value
    }
}

const filterInitialState = {
    status: statusFilters.all
}

export const filtersReducer = (state = filterInitialState, action) => {
    switch (action.type) {
        case "filters/setStatusFilter":
          return {
            ...state,
            status: action.payload,
          };
        default:
          return state;
        }
}