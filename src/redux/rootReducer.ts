import { combineReducers } from "redux";

import covid from "./covid/slice";

const rootReducer = combineReducers({
  covid: covid,
});

export default rootReducer;
