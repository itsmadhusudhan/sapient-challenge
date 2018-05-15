import {
  setPlatform,
  setScore,
  setEditorsChoice,
  setGenre,
  setTitle,
  setReleaseYear
} from "../actions/filterActions";

//test set platform action
test("should return action object to set the game platform", () => {
  const action = setPlatform("play");
  expect(action).toEqual({ type: "SET_PLATFORM", platformName: "play" });
});

//test set score action
test("should return action object to set the game score", () => {
  const action = setScore(2);
  expect(action).toEqual({ type: "SET_SCORE", score: 2 });
});

//test set genre action
test("should return action object to set the game genre", () => {
  const action = setGenre("fantasy");
  expect(action).toEqual({ type: "SET_GENRE", genre: "fantasy" });
});

//test set editor's choice action
test("should return editor's choice action object", () => {
  const action = setEditorsChoice("Y");
  expect(action).toEqual({ type: "SET_EDITORS_CHOICE", choice: "Y" });
});

//test set title action
test("should return action object to set the title", () => {
  const action = setTitle("he");
  expect(action).toEqual({ type: "SET_TITLE", title: "he" });
});

//test set release year action
test("should return action object to set game release year", () => {
  const action = setReleaseYear(1996);
  expect(action).toEqual({ type: "SET_RELEASE_YEAR", year: 1996 });
});
