export const updateWithSelection = (role, title, selection) => {
  return { type: "UPDATE WITH SELECTION", payload: { role, title, selection } };
};
