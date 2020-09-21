import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
// import Dashboard from "./dashboard/Dashboard";
import Home from "./home/Home";
// import RouteGuard from "../auth/services/RouteGuard";
import HandleError from "../error/HandleError";
import SignOut from "../auth/signout/SignOut";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { changeTheme } from "../../actions/muiActions";
import { MUI_THEME } from "../../actions/types.js";
import { lightTheme, darkTheme } from "./home/navbar/Themes";

function AppRouter(props) {
  useEffect(() => {
    const storageTheme = localStorage.getItem(MUI_THEME);
    if (storageTheme !== props.themeObject.theme.palette.type) {
      storageTheme === "light"
        ? props.changeTheme(lightTheme)
        : props.changeTheme(darkTheme);
    }
  }, []);

  return (
    <ThemeProvider theme={props.themeObject.theme}>
      <Paper style={{ height: "100%", width: "100%" }}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            {/*
              <RouteGuard path="/main/:user" exact component={Dashboard} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/logout" exact component={SignOut} />
            */}
            <Route path="/401" exact component={HandleError} />
            <Route path="/404" exact component={HandleError} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

// default theme if no props passed
// AppRouter.defaultProps = {
//   themeObject: {},
// };

// specifying the types of props passed to this component
AppRouter.propTypes = {
  themeObject: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

// getting the theme object from store as props
const mapStateToProps = (state) => ({
  themeObject: state.mui,
});

export default connect(mapStateToProps, { changeTheme })(AppRouter);
