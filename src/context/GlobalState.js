import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  wishlist: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
  bookshelf: localStorage.getItem("bookshelf")
    ? JSON.parse(localStorage.getItem("bookshelf"))
    : [],
};

// create Context
export const GlobalContext = createContext(initialState);


// provider Component

const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(()=>{
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
    localStorage.setItem("bookshelf", JSON.stringify(state.bookshelf))
  }, [state]);
 
  // actions

  const addBookToWishlist = (book) => {
    dispatch({type: "ADD_BOOK_TO_WISHLIST", payload: book})
  };

  const removeBookFromWishlist = (id) => {
    dispatch({type: "REMOVE_BOOK_FROM_WISHLIST", payload: id})
  };

  const moveBookToBookshelf = (book) => {
    dispatch({type: "MOVE_BOOK_TO_BOOKSHELF", payload:book})
  }

  const addBookToBookshelf = (book) => {
    dispatch({ type: "ADD_BOOK_TO_BOOKSHELF", payload: book });
  };


const removeBookFromBookshelf = (id) => {
  dispatch({ type: "REMOVE_BOOK_FROM_BOOKSHELF", payload: id });
};

  return (
    <GlobalContext.Provider
      value={{ 
        wishlist: state.wishlist, 
        bookshelf: state.bookshelf, 
        addBookToWishlist, 
        removeBookFromWishlist, 
        addBookToBookshelf,
        moveBookToBookshelf,
        removeBookFromBookshelf
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
