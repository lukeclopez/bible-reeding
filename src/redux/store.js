import { createStore } from "redux";
import { main } from "./reducers";

const initialState = {
  startBook: "",
  startChapter: "",
  startVerse: "",
  endBook: "",
  endChapter: "",
  endVerse: ""
};

const store = createStore(main, initialState);

export default store;
