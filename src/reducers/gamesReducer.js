const gamesReducerDefaultState = [];

const gamesReducer = (state = gamesReducerDefaultState, action) => {
  switch (action.type) {
    case "FETCH_GAMES_REQUEST":
      return state;
    case "FETCH_GAMES_SUCCESS":
      return [...state,...action.games];
    case "FETCH_GAMES_ERROR":
    return [...state];
    default:
      return state;
  }
};

export default gamesReducer;
