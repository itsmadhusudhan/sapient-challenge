import React from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import {fetchGamesWithRedux} from "../actions/gamesActions";
import { selectGamesList } from "../selectors/gamesListSelector";
import GamesListItem from "./GamesListItem";

class GamesList extends React.Component {
 

  render() {
    return (
      <div className="gameslist__container">
       <h3> Total Games:{" "}
        {this.props.games.length !== 0 ? this.props.games.length : 0}</h3>
        <div className="gameslist">
          {this.props.games && this.props.games.length === 0
            ? "No data Found...."
            : this.props.games.map(game => {
                return <GamesListItem key={uuid()} {...game}/>;
              })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: selectGamesList(state.games, state.filters)
  };
};

export default connect(mapStateToProps)(GamesList);
