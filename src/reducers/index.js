// dependencies
import { combineReducers } from "redux";

import locationReducer from "./locationReducer";
import blogsReducer from "./blogsReducer";
import muiReducer from "./muiReducer";

// all reducers combined & default exported
export default combineReducers({
  mui: muiReducer,
  location: locationReducer,
  blogs: blogsReducer,
});
