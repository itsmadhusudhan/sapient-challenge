import { combineReducers, createStore } from "redux";
import gamesReducer from "../reducers/gamesReducer";
import filtersReducer from "../reducers/filtersReducer";

export default () => {
  const store = createStore(
    combineReducers({
      games: gamesReducer,
      filters: filtersReducer
    })
  );

  return store;
};
