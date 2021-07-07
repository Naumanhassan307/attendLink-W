import RootReducer from "../store/RootReducer";

import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
