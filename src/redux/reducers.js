export const main = (state, action) => {
  switch (action.type) {
    case "UPDATE SELECTION":
      const { role, type, value } = action.payload;
      state[role][type] = value;
      return state;
    default:
      return state;
  }
};
