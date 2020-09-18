import { GET_BLOGS } from "./types";
import { BLOGS } from "../components/database/BlogsDB.js";

/*
This action is triggered by blogs
*/

console.log("blogs array: ", BLOGS);
export const getBlogs = () => async (dispatch) => {
  try {
    console.log("Success");
    dispatch({
      type: GET_BLOGS,
      payload: BLOGS,
    });
  } catch (error) {
    console.log("Failure");
    dispatch({
      type: GET_BLOGS,
      payload: error,
    });
  }
};
