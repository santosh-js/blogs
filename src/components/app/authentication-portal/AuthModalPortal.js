import React, { useState } from "react";
import SignIn from "../../auth/signin/SignIn";
import SignUp from "../../auth/signup/SignUp";
import { Modal, Fade } from "@material-ui/core";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { useStyles } from "../home/Home.style";
import CustomModal from "./CustomModal";

function AuthModalPortal(props) {
  const { url, modal, closeModal } = props;
  const [signin, setSignin] = useState(false);

  // const modalRoot = document.getElementById("auth_modal");

  // const elementRef = useRef();

  // useEffect(() => {
  // We create an element div for this modal
  // elementRef.current = document.createElement("div");
  // elementRef.current.setAttribute("id", "modal");
  // modalRoot.appendChild(elementRef.current);
  // return () => {
  //   modalRoot.removeChild(elementRef.current);
  // };
  // }, []);

  const switchForm = () => {
    setSignin(!signin);
  };
  const classes = useStyles();
  return <CustomModal data={props} />;

  /*<CustomModal
      signin={signin}
      url={url}
      modal={open}
      closeModal={handleClose}
      switchForm={switchForm}
    /> */
}

export default AuthModalPortal;
