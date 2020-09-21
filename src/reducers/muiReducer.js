import { CHANGE_THEME, GET_STYLES } from "../actions/types";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const initialState = {
  theme: createMuiTheme({
    layouts: {
      mobile: { min: 0, max: 768 },
      tab: { min: 768, max: 992 },
      desktop: { min: 992, max: 3600 },
    },
    palette: {
      type: "light",
    },
  }),
  style: makeStyles({}),
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case GET_STYLES:
      return {
        ...state,
        style: action.payload,
      };
    default:
      return state;
  }
}
