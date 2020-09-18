import { GET_BLOGS } from "./types";
import { BLOGS } from "../components/database/BlogsDB.js";

/*
This action is triggered by blogs
*/

export const getBlogs = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_BLOGS,
      payload: BLOGS,
    });
  } catch (error) {
    dispatch({
      type: GET_BLOGS,
      payload: error,
    });
  }
};
