//fetch data from url using ES6 fetch api
export const fetchGames = () => {
  const api = "http://starlord.hackerearth.com/gamesext";
  return fetch(api).then(response => Promise.all([response, response.json()]));
};


export const fetchGamesRequest=()=>({
  type:"FETCH_GAMES_REQUEST"
})


export const fetchGamesSuccess=(games)=>({
  type:"FETCH_GAMES_SUCCESS",
  games
});

export const fetchGamesError=()=>({
  type:"FETCH_GAMES_ERROR"
})

export const fetchGamesWithRedux = () => {
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