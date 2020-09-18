import { CHANGE_THEME, MUI_THEME } from "./types";
// import { themeService } from "../components/auth/services/themeService";

/*
This action is triggered by navbar theme menu
*/
export const changeTheme = (theme) => async (dispatch) => {
  try {
    localStorage.setItem(MUI_THEME, theme.palette.type);
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
