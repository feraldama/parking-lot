import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducerPark from "./reducers/reducerPark";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    reducerPark,
  }),
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
