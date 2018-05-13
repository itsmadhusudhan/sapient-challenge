import React from "react";
import ReactDOM from "react-dom";
import GamesArena from "./components/GamesArena";
import configStore from "./store/configStore";
import {Provider} from "react-redux";
import {fetchGames,fetchGamesRequest,fetchGamesSuccess,fetchGamesError} from "./actions/gamesActions";
import "./styles/style.scss";
import { setPlatform,setScore, setReleaseYear,setGenre,setEditorsChoice } from "./actions/filterActions";

//create store by invoking configStore
const store = configStore();

// console.log(store.getState());
store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(setPlatform("PlayStation Vita"));

store.dispatch(setScore(5));

store.dispatch(setReleaseYear(2012));

store.dispatch(setGenre("Action"));

store.dispatch(setEditorsChoice("N"))





const jsx=(
  <Provider store={store}>
  <GamesArena />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));
