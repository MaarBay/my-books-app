import React, { Fragment } from "react";
import { MdClose } from "react-icons/md";
import classes from "./Banner.module.css";

function Banner({ onClose }) {
  return (
    <Fragment>
      <div className={classes["banner-div"]}>
        <p className={classes["banner-text"]}>
          It is always the right time to start reading books.
        </p>
        <button className={classes["close-icon"]} onClick={onClose}>
          <MdClose size={16} />
        </button>
      </div>
    </Fragment>
  );
}

export default Banner;
