import React from "react";
import ReactDOM from "react-dom";
import GamesArena from "./components/GamesArena";
import configStore from "./store/configStore";
import {Provider} from "react-redux";
import {fetchGames,fetchGamesRequest,fetchGamesSuccess,fetchGamesError} from "./actions/gamesActions";
import "./styles/style.scss";
import { setPlatform,setScore, setReleaseYear,setGenre,setEditorsChoice, setTitle } from "./actions/filterActions";

//create store by invoking configStore
const store = configStore();

store.subscribe(()=>{
  console.log(store.getState());
})





const jsx=(
  <Provider store={store}>
  <GamesArena />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));
