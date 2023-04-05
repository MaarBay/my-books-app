import React, { Fragment, useState } from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
import LoginModal from "../Form/UI/LoginModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <nav className={classes["header-div"]}>
        <h1 className={classes.title}>
          <NavLink to="/" style={{ color: "white", textDecoration: "none", fontSize: "32px", }}>
            MY BOOKS
          </NavLink>
        </h1>

        <ul className={classes.list}>
          <li className={classes["single-item"]}>
            <NavLink
              to="/bookshelf"
              style={({ isActive }) => ({color: isActive ? "red" : "white"})
              } // undefined means no classes if it is not active
            >
              BOOKSHELF
            </NavLink>
          </li>
          <li className={classes["single-item"]}>
            <NavLink
              to="/wishlist"
              style={({ isActive }) => ({color: isActive ? "red" : "white"})}
            >
              WISHLIST
            </NavLink>
          </li>
        </ul>
        <button
          type="button"
          className={classes.login}
          onClick={() => setShowModal(true)}
        >
          LOG IN
        </button>

        {showModal &&
          createPortal(
            <LoginModal onClose={() => setShowModal(false)} />,
            document.body
          )}
      </nav>
    </Fragment>
  );
};

export default Header;
