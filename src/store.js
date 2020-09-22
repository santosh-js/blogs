// Dependencies
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// initalState object for redux store
const initalState = {};

// middleware for advance dispatch [async tasks]
const middleware = [thunk];

let store;

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
  store = createStore(
    rootReducer,
    initalState,
    compose(applyMiddleware(...middleware), ReactReduxDevTools)
  );
} else if (
  window.navigator.userAgent.includes("Firefox") &&
  ReactReduxDevTools
) {
  store = createStore(
    rootReducer,
    initalState,
    compose(applyMiddleware(...middleware), ReactReduxDevTools)
  );
} else {
  store = createStore(
    rootReducer,
    initalState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
