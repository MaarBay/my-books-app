import { Fragment, useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import classes from "./BookItemModal.module.css";
import { GlobalContext } from "../../../context/GlobalState";

const BookItemModal = (props) => {
  const { addBookToWishlist, wishlist, bookshelf, addBookToBookshelf } =
    useContext(GlobalContext);

  // to prevent the user from adding the same book twice or multiple times

  let storedBook = wishlist.find((o) => o.id === props.id);
  let storedBshBook = bookshelf.find((o) => o.id === props.id);

  const wishlistDisabled = storedBook ? true : false;
  const bookshelfDisabled = storedBshBook ? true : false;

  if (!props.show) {
    return null;
  }

  return (
    <Fragment>
      <div className={classes.overlay} onClick={props.onClose}></div>
      <div
        className={classes["overlay-inner"]}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button type="button" className={classes.close} onClick={props.onClose}>
          <AiFillCloseCircle />
        </button>
        <div className={classes["inner-box"]}>
          <span className={classes["inner-img"]}>
            <img src={props.image} alt=""></img>
          </span>
          <div className={classes["content-div"]}>
            <h4>{props.title}</h4>
            <h5>{props.author}</h5>
            <h6 className={classes.publisher}>{props.publisher}</h6>
          </div>
          <p className={classes.description}>{props.description}</p>
          <div className={classes["option-btns"]}>
            <button
              type="button"
              className={classes["main-btns"]}
              disabled={wishlistDisabled}
              onClick={() => addBookToWishlist(props)}
            >
              Add to Wishlist
            </button>
            <button
              type="button"
              className={classes["main-btns"]}
              disabled={bookshelfDisabled}
              onClick={() => addBookToBookshelf(props)}
            >
              Add to Bookshelf
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookItemModal;
