export const main = (state, action) => {
  switch (action.type) {
    case "UPDATE WITH SELECTION":
      const { role, title, selection } = action.payload;
      state[role + title] = selection;
      return state;
    default:
      return state;
  }
};
