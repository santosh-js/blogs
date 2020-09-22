import React, { useState, lazy, Suspense } from "react";
import Blogs from "./Blogs";
import { Button, Typography, Box } from "@material-ui/core/";

// Custom on click lazy loading the objects on homepage
const BatchBlogs = ({ blogs, numberPerBatch = 9 }) => {
  // nine (9) blogs per post load state & action
  const [batch, setBatch] = useState(1);
  const addToBatch = () => {
    if (blogs.length > batch * numberPerBatch) {
      setBatch(batch + 1);
    }
  };

  return (
    <>
      <Blogs blogs={blogs.slice(0, batch * numberPerBatch)} />

      {blogs.length >= batch * numberPerBatch ? (
        <Box textAlign="center">
          <Button
            style={{
              fontFamily: "Pacifico",
              textTransform: "none",
              marginBottom: "20px",
            }}
            onClick={addToBatch}
            variant="outlined"
            size="large"
            color="secondary"
          >
            Show more
          </Button>
        </Box>
      ) : (
        <Box textAlign="center">
          <Typography
            style={{
              fontFamily: "Pacifico",
              textTransform: "none",
              color: "#f4511e",
              cursor: "pointer",
              marginBottom: "20px",
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
