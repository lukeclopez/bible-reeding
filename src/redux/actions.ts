export const updateSelection = (
  role: string,
  type: string,
  value: string | number
) => {
  return { type: "UPDATE SELECTION", payload: { role, type, value } };
};
