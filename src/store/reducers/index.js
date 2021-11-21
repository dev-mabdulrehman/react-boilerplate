// Root Reducer

import { combineReducers } from "redux";
import authUserReducer from "./authUser";

export let rootReducer = combineReducers({
  authUser: authUserReducer,
});

export default rootReducer;
