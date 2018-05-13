import React from "react";
import { connect } from "react-redux";
import {fetchGamesWithRedux} from "../actions/gamesActions";
import { selectGamesList } from "../selectors/gamesListSelector";
import GamesListItem from "./GamesListItem";

class GamesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGamesWithRedux());
  }

  render() {
    return (
      <div className="gameslist__container">
        Total Games:{" "}
        {this.props.games.length !== 0 ? this.props.games.length : 0}
        <div className="gameslist">
          {this.props.games.length === 0
            ? "Fetching data...."
            : this.props.games.map(game => {
                return <GamesListItem {...game}/>;
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
