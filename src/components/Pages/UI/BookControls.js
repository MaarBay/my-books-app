import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import classes from "./BookControls.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

const BookControls = ({ book, type }) => {
  const {
    removeBookFromWishlist,
    moveBookToBookshelf,
    removeBookFromBookshelf,
  } = useContext(GlobalContext);

  return (
    <div>
      {type === "wishlist" && (
        <>
          <button
            className={classes.btnmove}
            onClick={() => moveBookToBookshelf(book)}
          >
            Move to Bookshelf
          </button>

          <button
            className={classes.btn}
            onClick={() => removeBookFromWishlist(book.id)}
          >
            Remove from Wishlist
          </button>
        </>
      )}

      {type === "bookshelf" && (
        <>
          <button
            className={classes.btnbsh}
            onClick={() => removeBookFromBookshelf(book.id)}
          >
            Remove from Bookshelf
          </button>
        </>
      )}
    </div>
  );
};

export default BookControls;
