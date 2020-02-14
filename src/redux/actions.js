export const updateSelection = (role, type, value) => {
  return { type: "UPDATE SELECTION", payload: { role, type, value } };
};
