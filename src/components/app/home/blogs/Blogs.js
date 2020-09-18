import React, { useState, useEffect } from "react";
import styles from "./Blogs.module.css";
import Blog from "./Blog";
import colors from "./Colors.module.css";
import Typography from "@material-ui/core/Typography";
// import { connect } from "react-redux";
// import { TextField } from "@material-ui/core";
import Typist from "react-typist";
import classnames from "classnames";

function Blogs(props) {
  return (
    <>
      {/*  <div className={styles.section}>
        <TextField
          type="text"
          name="location"
          value={location}
          label="Filter by name"
          variant="outlined"
        />
        <TextField
          type="text"
          name="location"
          value={location}
          label="Enter your city name"
          variant="outlined"
          style={{ marginLeft: "20px" }}
        />
      </div> */}

      <div className={styles.section}>
        <Typography
          style={{ fontFamily: "Courier New", color: "#3be8b0" }}
          variant="h2"
        >
          {"Blog Posts"}
        </Typography>
      </div>
      <div className={classnames(`${styles.container}`)}>
        {props.blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </>
  );
}

export default Blogs;
