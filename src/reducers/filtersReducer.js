const filtersReducerDefaultState={
  platform:"",
  score:0,
  genre:"",
  editorsChoice:"",
  releaseYear:""
}

const filtersReducer=(state=filtersReducerDefaultState,action)=>{
  switch(action.type){
    case "SET_PLATFORM":
      return {...state,platform:action.platformName};
    case "SET_SCORE":
      return {...state,score:action.score};
    case "SET_GENRE":
      return {...state,genre:action.genre};
    case "SET_EDITORS_CHOICE":
      return {...state,editorsChoice:action.choice};
    case "SET_RELEASE_YEAR":
      return {...state,releaseYear:action.year};
    default: return state;
  }

} 

export default filtersReducer;