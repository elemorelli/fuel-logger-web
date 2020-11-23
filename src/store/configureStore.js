import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userProfileReducer from "../reducers/userProfile";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      userProfile: userProfileReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
