export const gamesMiddleWare = store => next => action => {
  // console.log("Middleware triggered:", action);
  // console.log(store.getState())
  if(typeof action==="function"){
    // console.log("request");
    return action(store.dispatch)
  }
  // console.log(next(action))
 return  next(action);
}