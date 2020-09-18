import { CHANGE_THEME } from "./types";

/*
This action is triggered by navbar theme menu
*/
export const changeTheme = (theme) => async (dispatch) => {
  try {
    dispatch({
      type: CHANGE_THEME,
      payload: theme,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_THEME,
      payload: error,
    });
  }
};
