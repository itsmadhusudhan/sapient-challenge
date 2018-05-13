export const gamesMiddleWare = store => next => action => {
  // console.log("Middleware triggered:", action);
  if(typeof action==="function"){
    return action(store.dispatch)
  }
 return  next(action);
}