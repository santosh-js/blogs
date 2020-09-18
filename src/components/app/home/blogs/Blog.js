import React from "react";
import classnames from "classnames";
import styles from "./Blogs.module.css";

const Blog = ({ blog }) => {
  return (
    <div className={classnames(`${styles.zone} ${blog.color}`)}>
      <img src={blog.src} alt="" className={styles.image} />
      <figcaption className={styles.font}>
        <code>{blog.name}</code>
      </figcaption>
    </div>
  );
};

export default Blog;
// {props.blogs.map((blog) => (
//   <Blog key={blog.id} blog={blog} />
// ))}
