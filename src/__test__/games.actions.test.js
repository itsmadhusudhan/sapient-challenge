import {
  fetchGamesRequest,
  fetchGames,
  fetchGamesError,
  fetchGamesSuccess,
  fetchGamesWithRedux
} from "../actions/gamesActions";
import {Dispatch } from "redux";

test("should return a function from api",()=>{
  const action=fetchGamesWithRedux();
  expect(typeof action).toEqual("function");
});

test("should return fetch games request action object",()=>{
  const action=fetchGamesRequest();
  expect(action).toEqual({type:"FETCH_GAMES_REQUEST"})
});

test("should return fetch games succes action object with games undefined",()=>{
  const action=fetchGamesSuccess();
  expect(action).toEqual({type:"FETCH_GAMES_SUCCESS",games:undefined});
});

test("should return fecth games error action object",()=>{
  const action=fetchGamesError();
  expect(action).toEqual({type:"FETCH_GAMES_ERROR"})
});


test("should return fetch games action object with data",()=>{
  const action=fetchGames();
  expect(typeof action).toEqual("undefined")
})  