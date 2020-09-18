import { createMuiTheme } from "@material-ui/core/styles";
export const lightTheme = createMuiTheme({
  layouts: {
    mobile: { min: 0, max: 768 },
    tab: { min: 768, max: 992 },
    desktop: { min: 992, max: 3600 },
  },
  palette: {
    type: "light",
  },
});

export const darkTheme = createMuiTheme({
  layouts: {
    mobile: { min: 0, max: 768 },
    tab: { min: 768, max: 992 },
    desktop: { min: 992, max: 3600 },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "dark",
      },
    },
  },
  palette: {
    type: "dark",
  },
});
