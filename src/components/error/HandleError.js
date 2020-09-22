// dependencies

import React from "react";
import styles from "./HandleError.module.css";
import { NavLink } from "react-router-dom";
import { ERRORS } from "../database/ErrorsDB";

// getting the error object based on the history uri
function getErrorByUri(props) {
  const error = ERRORS.filter((error) => error.id === props.location.pathname);
  return error;
}

// Error UI component
function HandleError(props) {
  const [{ id, value, style }] = getErrorByUri(props);
  return (
    <div className={styles.error}>
      <h3>{value}</h3>

      <NavLink className={styles.link} to="/">
        Go to Home
      </NavLink>
    </div>
  );
}

export default HandleError;
