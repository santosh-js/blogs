import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import locationReducer from "./locationReducer";
import blogsReducer from "./blogsReducer";

export default combineReducers({
  theme: themeReducer,
  location: locationReducer,
  blogs: blogsReducer,
});
