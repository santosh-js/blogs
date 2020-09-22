import React from "react";
import { Link } from "react-router-dom";

// Siginout page
function SignOut() {
  return (
    <div>
      <h1>Logged out Successfully</h1>
      <Link to="/">Go to Home </Link>
    </div>
  );
}

export default SignOut;
