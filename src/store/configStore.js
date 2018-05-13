import { combineReducers, createStore, applyMiddleware } from "redux";
import gamesReducer from "../reducers/gamesReducer";
import filtersReducer from "../reducers/filtersReducer";
import { gamesMiddleWare } from "../middleware/gamesMiddleWare";

export default () => {
  const store = createStore(
    combineReducers({
      games: gamesReducer,
      filters: filtersReducer
    }),
    applyMiddleware(gamesMiddleWare)
  );

  return store;
};
