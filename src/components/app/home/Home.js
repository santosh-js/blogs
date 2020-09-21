import React, { useEffect, useCallback, useState } from "react";
import Navbar from "./navbar/Navbar";
import AuthModalPortal from "../authentication-portal/AuthModalPortal";
import Footer from "./footer/Footer";
import BatchBlogs from "./blogs/BatchBlogs";
import CustomBanner from "./banner/Banner";
import { getBlogs } from "../../../actions/blogsActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Home(props) {
  const [open, setOpen] = useState(false);

  const url = props.history;

  useEffect(() => {
    props.getBlogs();
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      <Navbar url={url} handleOpen={handleOpen} />
      <AuthModalPortal url={url} modal={open} closeModal={handleClose} />
      <CustomBanner />
      <BatchBlogs blogs={props.blogs} numPerBatch={9} />
      <Footer />
    </div>
  );
}

Home.propTypes = {
  blogs: PropTypes.array.isRequired,
  getBlogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  blogs: state.blogs.blogs,
});

export default connect(mapStateToProps, { getBlogs })(Home);
