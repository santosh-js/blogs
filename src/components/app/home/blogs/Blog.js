import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Blogs.module.css";
import colors from "./Colors.module.css";
import planet1 from "../../../../assets/planets/planet1.jpg";
import planet2 from "../../../../assets/planets/planet2.png";
import planet3 from "../../../../assets/planets/planet3.jpg";
import planet4 from "../../../../assets/planets/planet4.jpg";
import planet5 from "../../../../assets/planets/planet5.jpg";
import planet6 from "../../../../assets/planets/planet6.jpg";

const Blog = ({ blog }) => {
  return (
    <>
      <img src={blog.filename} alt="" className={styles.image} />
      <figcaption className={styles.font}>
        <code>{blog.name}</code>
      </figcaption>
    </>
  );
};

export default Blog;
