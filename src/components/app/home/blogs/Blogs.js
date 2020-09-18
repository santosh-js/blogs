import React, { useState, useEffect } from "react";
import styles from "./Blogs.module.css";
import PropTypes from "prop-types";
import Blog from "./Blog";
import colors from "./Colors.module.css";
import Typography from "@material-ui/core/Typography";
// import { connect } from "react-redux";
// import { TextField } from "@material-ui/core";
import planet1 from "../../../../assets/planets/planet1.jpg";
import planet2 from "../../../../assets/planets/planet2.png";
import planet3 from "../../../../assets/planets/planet3.jpg";
import planet4 from "../../../../assets/planets/planet4.jpg";
import planet5 from "../../../../assets/planets/planet5.jpg";
import planet6 from "../../../../assets/planets/planet6.jpg";
import Typist from "react-typist";
import classnames from "classnames";
import { getBlogs } from "../../../../actions/blogsActions";
import { connect } from "react-redux";

function Blogs(props) {
  console.log(props);

  useEffect(() => {
    props.getBlogs();
  }, []);

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
        <div className={classnames(`${styles.zone} ${colors.green}`)}>
          {/*{props.blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}*/}
          <img src={planet1} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planets</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.green}`)}>
          {/*{props.blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}*/}
          <img src={planet2} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planets</code>
          </figcaption>
        </div>
        <div className={classnames(`${styles.zone} ${colors.green}`)}>
          {/*{props.blogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}*/}
          <img src={planet3} alt="" className={styles.image} />
          <figcaption className={styles.font}>
            <code>Planets</code>
          </figcaption>
        </div>
      </div>
    </>
  );
}

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired,
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  blogs: state.blogs.blogs,
});

export default connect(mapStateToProps, { getBlogs })(Blogs);
