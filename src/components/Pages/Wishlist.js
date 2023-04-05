import { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import BookCard from "./UI/BookCard";
import classes from "./Wishlist.module.css";

const Wishlist = (props) => {
  console.log(props);
  const { wishlist } = useContext(GlobalContext);

  return (
    <Fragment>
      <div className={classes.wishlist}>
        <h1 className={classes.heading}>My Wishlist</h1>

        <span className={classes.counter}>
          {wishlist.length} {wishlist.length === 1 ? "Book" : "Books"}
        </span>

        {wishlist.length > 0 ? (
          <div className={classes["books-grid"]}>
            {wishlist.map((book) => (
              <BookCard book={book} type="wishlist" />
            ))}
          </div>
        ) : (
          <h1 className={classes["no-books"]}>
            No books in your wishlist. Add some...
          </h1>
        )}
      </div>
    </Fragment>
  );
};

export default Wishlist;
