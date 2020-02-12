import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import { main } from "./reducers";

const initialState = {
  startBook: "Genesis",
  startChapter: 1,
  startVerse: 1,
  endBook: "Genesis",
  endChapter: 1,
  endVerse: 31
};

const store = createStore(
  main,
  initialState,
  composeWithDevTools(applyMiddleware(...[]))
);

export default store;
