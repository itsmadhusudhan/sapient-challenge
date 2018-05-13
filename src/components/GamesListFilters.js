import React from "react";
import { connect } from "react-redux";
import {
  setPlatform,
  setGenre,
  setEditorsChoice,
  setReleaseYear,
  setScore
} from "../actions/filterActions";

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
      <div className="games__filters--bar">
        <div className="games__filter">
          Platform: 
          <select
            defaultValue=""
            onChange={e => {
              this.props.dispatch(setPlatform(e.target.value));
            }}
          >
            <option value="">All</option>
            {this.state.games
              ? [...new Set(this.props.games.map(game => game.platform))].map(
                  platform => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  )
                )
              : ""}
          </select>
        </div>

        <div className="games__filter">
          Genre: {" "}
          <select
            onChange={e => {
              this.props.dispatch(setGenre(e.target.value));
            }}
          >
            <option value="">All</option>
            {this.state.games
              ? [...new Set(this.props.games.map(game => game.genre))].map(
                  genre => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  )
                )
              : ""}
          </select>
        </div>
        <div className="games__filter">
          Score: {" "}
          <select
            onChange={e => {
              this.props.dispatch(setScore(e.target.value));
            }}
          >
            <option value="">All</option>
            {this.state.games
              ? [
                  ...new Set(
                    this.props.games.map(game => Math.ceil(game.score))
                  )
                ]
                  .sort((a, b) => a > b)
                  .map(score => (
                    <option key={score} value={score}>
                      {score}
                    </option>
                  ))
              : ""}
          </select>{" "}
          and above
        </div>
        <div className="games__filter">
          Release Year: 
          <select
            onChange={e => {
              console.log(e.target.value);
              this.props.dispatch(
                setReleaseYear(
                  e.target.value === "All"
                    ? e.target.value
                    : parseInt(e.target.value)
                )
              );
            }}
          >
            <option value="All">All</option>
            {this.state.games
              ? [...new Set(this.props.games.map(game => game.release_year))]
                  .sort((a, b) => a > b)
                  .map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))
              : ""}
          </select>
        </div>
        <div className="games__filter">
          Editor's Choice:{" "}
          <select
            onChange={e => {
              if (e.target.value === "yes") {
                this.props.dispatch(setEditorsChoice("Y"));
              } else if (e.target.value === "no") {
                this.props.dispatch(setEditorsChoice("N"));
              } else {
                this.props.dispatch(setEditorsChoice(""));
              }
            }}
          >
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
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
