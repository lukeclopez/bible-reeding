import { createStore } from "redux";
import { main } from "./reducers";

const initialState = {
  startBook: "Genesis",
  startChapter: "1",
  startVerse: "1",
  endBook: "Genesis",
  endChapter: "5",
  endVerse: "1"
};

const store = createStore(main, initialState);

export default store;
