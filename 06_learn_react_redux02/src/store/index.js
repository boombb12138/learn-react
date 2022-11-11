import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import counterReducer from "./counter";
import homeReducer from "./home";

// 将2个reducer合并
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer,
});

// 开启REDUX_DEVTOOLS
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
