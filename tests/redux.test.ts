import { updateSelection } from "../src/redux/actions";
import { initialState } from "./../src/redux/store";
import { main } from "../src/redux/reducers";

const payload = {
  role: "start",
  type: "book",
  value: "Genesis"
};

const updateSelectionWithPayload = {
  type: "UPDATE SELECTION",
  payload
};

test("should create an action to change the starting book #unit", () => {
  const expectedAction = updateSelectionWithPayload;
  expect(updateSelection(payload)).toEqual(expectedAction);
});

test("should handle `UPDATE SELECTION` #unit", () => {
  const expectedState = {
    ...initialState,
    start: { book: "Genesis", chapter: 1, verse: 1 }
  };
  const action = updateSelectionWithPayload;

  const reducedState = main(initialState, action);

  expect(reducedState).toEqual(expectedState);
});
