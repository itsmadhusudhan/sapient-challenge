export const selectGamesList = (
  gamesList,
  { platform, score, genre, editorsChoice, releaseYear,title }
) => {
  return gamesList.filter(game=>{
    const platformMatch=game.platform.toLowerCase().includes(platform.toLowerCase());
    const scoreMatch=game.score>=score;
    const genreMatch=game.genre.toLowerCase().includes(genre.toLowerCase());
    const yearMatch=releaseYear===""?true:game.release_year===releaseYear;
    const choiceMatch=game.editors_choice.toLowerCase().includes(editorsChoice.toLowerCase());
    const titleMatch=typeof game.title==="string"?game.title.toLowerCase().includes(title.toLowerCase()):game.title;
    
    return platformMatch && scoreMatch && genreMatch && yearMatch && choiceMatch && titleMatch;
  })
};
