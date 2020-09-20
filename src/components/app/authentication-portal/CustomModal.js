import React from "react";
import SignIn from "../../auth/signin/SignIn";
import SignUp from "../../auth/signup/SignUp";
import { Modal, Fade } from "@material-ui/core";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { useStyles } from "../home/Home.style";

const CustomModal = (props) => {
  return (
    <Modal open={modal} onClose={closeModal} className={classes.modal}>
      <Fade in={modal}>
        <div className={classes.paper}>
          {signin ? (
            <SignIn url={url} handleForm={switchForm} />
          ) : (
            <SignUp url={url} close={closeModal} handleForm={switchForm} />
          )}
        </div>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
