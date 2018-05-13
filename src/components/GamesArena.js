import React from "react";
import { connect} from "react-redux";
import {
  fetchGames,
  fetchGamesRequest,
  fetchGamesSuccess,
  fetchGamesError
} from "../actions/gamesActions";
import {selectGamesList} from "../selectors/gamesListSelector";

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
          console.log(this.props.games)
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: selectGamesList(state.games,state.filters)
  };
};

export default connect(mapStateToProps)(GamesArena);
