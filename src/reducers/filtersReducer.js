const filtersReducerDefaultState={
  platform:"",
  score:"",
  genre:"",
  editorsChoice:"",
  releaseYear:""
}

const filtersReducer=(state=filtersReducerDefaultState,action)=>{
  switch(action.type){
    default: return state;
  }

} 

export default filtersReducer;