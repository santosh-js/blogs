import React, { useState } from "react";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/SignUp";
import { Modal, Fade } from "@material-ui/core";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { useStyles } from "../../home/Home.style";

// Signin & Signup Modal Component
function AuthModalPortal(props) {
  // Props from Home Component
  const { url, modal, closeModal } = props;

  // Swicth between signin & signup forms
  const [signin, setSignin] = useState(false);
  const switchForm = () => {
    setSignin(!signin);
  };

  // styles
  const classes = useStyles();

  // React portal for modal component to render on "auth-modal"
  return ReactDOM.createPortal(
    <Modal
      disablePortal
      open={modal}
      onClose={closeModal}
      className={classes.modal}
    >
      <Fade in={modal}>
        <div className={classes.paper}>
          {signin ? (
            <SignIn url={url} handleForm={switchForm} />
          ) : (
            <SignUp url={url} close={closeModal} handleForm={switchForm} />
          )}
        </div>
      </Fade>
    </Modal>,
    document.getElementById("auth-modal")
  );
}

export default AuthModalPortal;
