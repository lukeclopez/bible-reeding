export interface Payload {
  [index: string]: any;
  role: string;
  type: string;
  value: number | string;
}

interface Action {
  [index: string]: any;
  type: string;
  payload: Payload;
}

export const main = (state: any, action: Action) => {
  switch (action.type) {
    case "UPDATE SELECTION":
      const { role, type, value } = action.payload;
      state[role][type] = value;
      return state;
    default:
      return state;
  }
};
