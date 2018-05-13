import React from "react";
import { connect} from "react-redux";
import Header from "./Header";
import GamesList from "./GamesList";
import GamesListFilters from "./GamesListFilters";

const GamesArena=()=>{
  return(
    <React.Fragment>
    <Header/>
    <GamesListFilters/>
    <GamesList/>
    </React.Fragment>
  )
}

export default GamesArena;
