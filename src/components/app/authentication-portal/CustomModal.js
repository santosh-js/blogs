import React, { useState } from "react";
import SignIn from "../../auth/signin/SignIn";
import SignUp from "../../auth/signup/SignUp";
import { Modal, Fade } from "@material-ui/core";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { useStyles } from "../home/Home.style";

const CustomModal = ({ data }) => {
  const { url, modal, closeModal } = data;
  const [signin, setSignin] = useState(false);
  const switchForm = () => {
    setSignin(!signin);
  };
  const classes = useStyles();

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
};

export default CustomModal;
