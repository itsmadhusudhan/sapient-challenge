import React from "react";
import { connect} from "react-redux";
import {
  fetchGames,
  fetchGamesRequest,
  fetchGamesSuccess,
  fetchGamesError
} from "../actions/gamesActions";

const fetchGamesWithRedux = () => {
  return (dispatch) => {
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

class GamesArena extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGamesWithRedux());
  }

  render() {
    return (
      <div>
        games arena
        {
          console.log(this.props.games[0])
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

export default connect(mapStateToProps)(GamesArena);
