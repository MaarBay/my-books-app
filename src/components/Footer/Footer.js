import React, { Fragment } from "react";
import classes from "./Footer.module.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaMedium } from "react-icons/fa";
 
function Footer() {
  return (
    <Fragment>
      <footer className={classes["wrapper-footer"]}>
        <div className={classes["social-div"]}>
          <a
            href="https://www.instagram.com"
            className={classes["social-div-span"]}
          >
            <AiFillInstagram size={35} color="gray" />
          </a>
          <a
            href="https://www.twitter.com"
            className={classes["social-div-span"]}
          >
            <AiFillTwitterCircle size={33} color="gray" />
          </a>
          <a
            href="https://www.medium.com"
            className={classes["social-div-span"]}
          >
            <FaMedium size={33} color="gray" />
          </a>
        </div>
        <div className={classes["extra-det-div"]}>
          <span className={classes["det-div"]}>Contact</span>
          <span className={classes["det-div"]}>About</span>
          <span className={classes["det-div"]}>Privacy</span>
          <span className={classes["det-div"]}>Legal</span>
          <span className={classes["det-div"]}>Blog</span>
          <span className={classes["det-div"]}>Careers</span>
        </div>
        <p> © 2002-2022 All rights reserved.</p>
      </footer>
    </Fragment>
  );
}

export default Footer;
