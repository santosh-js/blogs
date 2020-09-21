import React, { useState, useEffect } from "react";
import styles from "./Blogs.module.css";
import Blog from "./Blog";
import colors from "./Colors.module.css";
import { connect } from "react-redux";
import { Typography, Paper } from "@material-ui/core/";
import PropTypes from "prop-types";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import Typist from "react-typist";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

function Blogs(props) {
  const classes = makeStyles({
    root: {
      display: "flex",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      marginTop: "10px",
      padding: "2px 4px",
      height: 55,
    },
    input: {
      fontFamily: "Source sans pro",
      fontSize: "25px",
      marginLeft: props.theme.spacing(5),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })();

  return (
    <>
      <div className={classnames(`${styles.search}`)}>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search in library"
            inputProps={{ "aria-label": "library" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      <div className={classnames(`${styles.container}`)}>
        {props.blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}

Blogs.propTypes = {
  theme: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  theme: state.mui.theme,
});

export default connect(mapStateToProps, null)(Blogs);
