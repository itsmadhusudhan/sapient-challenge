import React from "react";
import { connect } from "react-redux";
import {
  setPlatform,
  setGenre,
  setEditorsChoice,
  setReleaseYear,
  setScore,
  setTitle
} from "../actions/filterActions";
import GamesListFilterItem from "./GamesListFilterItem";

class GamesListFilter extends React.Component {
  state = {
    games: this.props.games
  };

  componentWillReceiveProps() {
    this.setState(() => ({
      games: this.props.games
    }));
  }

  render() {
    return (
      <div className="games__filters">
        <div className="games__filters--input">
          <input
            onChange={e => 
            this.props.dispatch(setTitle(e.target.value))
            }
            placeholder=" Search Games by Titles"
          />
        </div>
        <div className="games__filters--bar">
          <GamesListFilterItem games={this.props.games} name="Platform" />
          <GamesListFilterItem games={this.props.games} name="Genre" />
          <GamesListFilterItem games={this.props.games} name="Score" />
          <GamesListFilterItem games={this.props.games} name="Release Year" />
          <GamesListFilterItem
            games={this.props.games}
            name="Editor's Choice"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(GamesListFilter);
