import React, { useState, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import Blogs from "./Blogs";
import { Button, Typography, Box } from "@material-ui/core/";

const BatchBlogs = ({ blogs, numberPerBatch = 9 }) => {
  const [batch, setBatch] = useState(1);

  const addToBatch = () => {
    if (blogs.length > batch * numberPerBatch) {
      setBatch(batch + 1);
    }
  };

  return (
    <>
      <Blogs blogs={blogs.slice(0, batch * numberPerBatch)} />
      {/*{blogs.length >= batch * numberPerBatch && (
        <Box textAlign="center">
          <Button
            style={{
              fontFamily: "-apple-system",
              textTransform: "none",
            }}
            onClick={addToBatch}
            color="secondary"
          >
            Show more...
          </Button>
        </Box>
      )}*/}
      {blogs.length >= batch * numberPerBatch ? (
        <Box textAlign="center">
          <Button
            style={{
              fontFamily: "-apple-system",
              textTransform: "none",
            }}
            onClick={addToBatch}
            color="secondary"
          >
            Show more...
          </Button>
        </Box>
      ) : (
        <Box textAlign="center">
          <Typography
            style={{
              fontFamily: "-apple-system",
              textTransform: "none",
              color: "red",
              cursor: "pointer",
            }}
            onClick={addToBatch}
          >
            No more blogs
          </Typography>
        </Box>
      )}
    </>
  );
};

export default BatchBlogs;
