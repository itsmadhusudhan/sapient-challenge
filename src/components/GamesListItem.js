import React from "react";

const GamesListItem = ({title,genre,platform,release_year,score,editors_choice}) => (
  <div className="game">
    <h2>{title}</h2>
    <p>Genre: {genre}</p>
    <p>Platform: {platform} </p>
    <p>Release Year: {release_year} </p>
    <p>Score: {score} </p>
    <p>Editor Choice: {editors_choice} </p>
  </div>
);

export default GamesListItem;
