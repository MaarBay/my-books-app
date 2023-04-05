import React, { Fragment } from "react";
import classes from "./BookCard.module.css";
import BookControls from "./BookControls";

const BookCard = ({ book, type }) => {
  return (
    <Fragment>
      <div className={classes.card}>
        <div className={classes.overlay}>
          <div className={classes.info}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
          </div>
          <img src={book.image} alt=""></img>
        </div>
        <BookControls type={type} book={book} />
      </div>
    </Fragment>
  );
};

export default BookCard;
