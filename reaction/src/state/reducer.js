import { NEW_MESSAGE } from "./types";

export const initialState = { messages: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.item] };
    default:
      return state;
  }
};
