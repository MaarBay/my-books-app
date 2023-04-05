import { Fragment } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import BookCard from "./UI/BookCard";
import classes from "./Bookshelf.module.css";


const Bookshelf = () => {
  const { bookshelf } = useContext(GlobalContext);
  return (
    <Fragment>
      <div className={classes.wishlist}>
        <h1 className={classes.heading}>My Bookshelf</h1>
        <span className={classes.counter}>
          {bookshelf.length} {bookshelf.length === 1 ? "Book" : "Books"}
        </span>
        {bookshelf.length > 0 ? (
          <div className={classes["books-grid"]}>
            {bookshelf.map((book) => (
              <BookCard
                book={book}
                key={book.id}
                title={book.title}
                author={book.author}
                image={book.image}
                type="bookshelf"
              />
            ))}
          </div>
        ) : (
          <h1 className={classes["no-books"]}>
            No books in your bookshelf. Add some...
          </h1>
        )}
      </div>
    </Fragment>
  );
};

export default Bookshelf;
