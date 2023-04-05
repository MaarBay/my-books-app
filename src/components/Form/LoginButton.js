import classes from "./LoginButton.module.css";

import React from "react";

const LoginButton = (props) => {
  return (
    <button
      className={classes.button}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default LoginButton;
