
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_WISHLIST":
      return {
        ...state,
        wishlist: [action.payload, ...state.wishlist],
      };

    case "MOVE_BOOK_TO_BOOKSHELF":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (book) => book.id !== action.payload.id
        ),
        bookshelf: [action.payload, ...state.bookshelf],
      };

    case "REMOVE_BOOK_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter((book) => book.id !== action.payload),
      };

    case "ADD_BOOK_TO_BOOKSHELF":
      return {
        ...state,
        bookshelf: [action.payload, ...state.bookshelf],
      };

    case "REMOVE_BOOK_FROM_BOOKSHELF":
      return {
        ...state,
        bookshelf: state.bookshelf.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};

export default AppReducer;