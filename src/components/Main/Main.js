import React, { Fragment } from "react";
import classes from "./Main.module.css";
import Search from "./Search";
import BookCard from "./BookCard";

function Main() {

  return (
    <Fragment>
      <div className={classes["search-div"]}>
        <Search/>
        <section><BookCard/></section>
      </div>
    </Fragment>
  );
}

export default Main;
