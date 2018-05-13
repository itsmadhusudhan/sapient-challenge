import React from "react";
import { connect} from "react-redux";
import Header from "./Header";
import GamesList from "./GamesList";
import GamesListFilters from "./GamesListFilters";
import {fetchGamesWithRedux} from "../actions/gamesActions";


class GamesArena extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchGamesWithRedux());
  }

  render(){

  return(
    <div>
    <Header/>
    <React.Fragment>
    <GamesListFilters/>
    <GamesList/>
    </React.Fragment>
    </div>
  )
}
}

const mapStateToProps=(state)=>{
  return{
    games:state.games
  }
}

export default connect(mapStateToProps)(GamesArena);
