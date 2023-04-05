import React, { Fragment, useState } from "react";
import classes from "./BookCard.module.css";
import BookItemModal from "./UI/BookItemModal";

const BookCard = (book) => {
  const [showModal, setShowModal] = useState(false);
  const [bookItem, setBookItem] = useState();

  if (book.image !== undefined) {
    return (
      <Fragment>
        {showModal && (
          <BookItemModal
            show={showModal}
            book={bookItem}
            onClose={() => setShowModal(false)}
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            publishedDate={book.publishedDate}
            publisher={book.publisher}
            description={book.description}
          />
        )}
        <div className={classes.card}>
          <div
            className={classes.overlay}
            onClick={() => {
              setShowModal(true);
              setBookItem(book);
            }}
          >
            <div className={classes.info}>
              <h2>{book.title}</h2>
              <h3>{book.author}</h3>
            </div>
            <img src={book.image} alt={book.title}></img>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default BookCard;
