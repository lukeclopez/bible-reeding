import { Payload } from "./reducers";

export const updateSelection = (payload: Payload) => {
  return { type: "UPDATE SELECTION", payload };
};
