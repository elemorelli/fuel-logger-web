import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userProfileReducer from "../reducers/userProfile";
import vehiclesReducer from "../reducers/vehicles";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      userProfile: userProfileReducer,
      vehicles: vehiclesReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
