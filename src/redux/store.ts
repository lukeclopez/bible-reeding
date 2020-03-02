import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import { main } from "./reducers";

export const initialState = {
  start: {
    book: "1 John",
    chapter: 1,
    verse: 1
  },
  end: {
    book: "Revelation",
    chapter: 22,
    verse: 21
  }
};

const store = createStore(
  main,
  initialState,
  composeWithDevTools(applyMiddleware(...[]))
);

export default store;
