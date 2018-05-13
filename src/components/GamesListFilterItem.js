import React from "react";
import { connect } from "react-redux";
import {
  setPlatform,
  setGenre,
  setEditorsChoice,
  setReleaseYear,
  setScore
} from "../actions/filterActions";

const GamesListFilterItem = props => (
  <div className="games__filter">
    {props.name}:{" "}
    <select
      defaultValue=""
      onChange={e => {
        if (props.name === "Platform") {
          props.dispatch(setPlatform(e.target.value));
        } else if (props.name === "Genre") {
          props.dispatch(setGenre(e.target.value));
        } else if (props.name === "Score") {
          props.dispatch(setScore(e.target.value));
        } else if (props.name === "Release Year") {
          props.dispatch(
            setReleaseYear(
              e.target.value === ""
                ? e.target.value
                : parseInt(e.target.value)
            )
          );
        } else if (props.name === "Editor's Choice") {
          if (e.target.value === "yes") {
            props.dispatch(setEditorsChoice("Y"));
          } else if (e.target.value === "no") {
            props.dispatch(setEditorsChoice("N"));
          } else {
            props.dispatch(setEditorsChoice(""));
          }
        }
      }}
    >
      <option value="">All</option>
      {props.games ? (
        props.name === "Platform" ? (
          [...new Set(props.games.map(game => game.platform))].map(platform => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))
        ) : props.name === "Genre" ? (
          [...new Set(props.games.map(game => game.genre))].map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))
        ) : props.name === "Score" ? (
          [...new Set(props.games.map(game => Math.ceil(game.score)))]
            .sort((a, b) => a > b)
            .map(score => (
              <option key={score} value={score}>
                {score}
              </option>
            ))
        ) : props.name === "Release Year" ? (
          [...new Set(props.games.map(game => game.release_year))]
            .sort((a, b) => a > b)
            .map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))
        ) : props.name === "Editor's Choice" ? (
          <React.Fragment>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </React.Fragment>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </select>
  </div>
);

export default connect()(GamesListFilterItem);
