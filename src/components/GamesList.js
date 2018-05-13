import React from "react";
import { connect } from "react-redux";
import {
  fetchGames,
  fetchGamesRequest,
  fetchGamesSuccess,
  fetchGamesError
} from "../actions/gamesActions";
import { selectGamesList } from "../selectors/gamesListSelector";

const fetchGamesWithRedux = () => {
  return dispatch => {
    dispatch(fetchGamesRequest());
    return fetchGames().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchGamesSuccess(json));
      } else {
        dispatch(fetchGamesError());
      }
    });
  };
};

class GamesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGamesWithRedux());
  }

  render() {
    return (
      <div className="gameslist__container">
      Total Games: {this.props.games.length!==0?this.props.games.length:0}
        <div className="gameslist">
        {this.props.games.length === 0
          ? "Fetching data...."
          : this.props.games.map(game => {
              return (
                <div className="game">
                  <h2>{game.title}</h2>
                  <p>Genre: {game.genre}</p>
                  <p>Platform: {game.platform} </p>
                  <p>Release Year: {game.release_year} </p>
                  <p>Score: {game.score} </p>
                  <p>Editor Choice: {game.editors_choice} </p>
                </div>
              );
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
