import { ADD_USER } from "./actionTypes";

const initialState = {
  id: [],
  name: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const { id, content } = action.payload;
      return {
        ...state,
        [id] 
      };
    }
    default:
      return state;
  }
}
