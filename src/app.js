import React from 'react';
import ReactDOM from 'react-dom';
import GamesArena from "./components/GamesArena";
import configStore from "./store/configStore";
import "./styles/style.scss";

//create store by invoking configStore
const store=configStore();

console.log(store.getState());

ReactDOM.render(<GamesArena/>,document.getElementById("root"))