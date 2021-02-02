import { LOGIN_ACTION_KEY } from "./constants";

const initialState = {
  userDetails: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTION_KEY:
      return { ...state, userDetails: { ...action.payload } };
    default:
      return state;
  }
};

export default loginReducer;
