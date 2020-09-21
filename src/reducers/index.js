import { combineReducers } from "redux";

import locationReducer from "./locationReducer";
import blogsReducer from "./blogsReducer";
import muiReducer from "./muiReducer";

export default combineReducers({
  mui: muiReducer,
  location: locationReducer,
  blogs: blogsReducer,
});
