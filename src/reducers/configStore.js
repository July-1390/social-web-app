import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import loginReducer from "./loginReducer";
import postReducer from "./postReducer";

const configureStore = () => {
  const rootReducer = combineReducers({
    login: loginReducer,
    posts: postReducer,
  });
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
