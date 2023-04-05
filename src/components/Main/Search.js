import React, { useEffect, useState } from "react";
import classes from "./Search.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import BookItem from "./BookCard";


const Search = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Lord of the rings");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // null is because initially we don't have errors

  const [visibleBooks, setVisibleBooks] = useState(6);

 const showMoreBooks = () => {
  setVisibleBooks(prevBook => prevBook + 6);
}


   useEffect(() => {
     getResults();
   }, [query]);

 
  const getResults = async () => {
    setIsLoading(true);
    setError(null); // clearing the previous errors that we might have got
    
    try {  
    
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_API_KEY}&maxResults=20&langRestrict=en`
    );
     
    if (!response.ok) {throw new Error ("Something went wrong.Please try again.");}
   
    const data = await response.json();
   
    setBooks(data.items);
    console.log(data.items);   

} catch (error) {
    setError ("Something went wrong... Please try again.");
    console.log(error.message);
}

setIsLoading(false);
       
  };

  if (isLoading) {
    return <h2 className={classes.loadh2}>Loading...</h2>
  } 

  const updateSearchHandler = e => {
     setSearch(e.target.value);
  };

  const getSearchHandler = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(""); // resetting the search bar text (so it will clear its self up)
  }


  return (
    <div className={classes.wrapper}>
      <form onSubmit={getSearchHandler} className={classes["search-form"]}>
        <span onClick = {getSearchHandler} className={classes["search-icon"]}>
          <AiOutlineSearch />
        </span>
        <input
          onChange={updateSearchHandler}
          className={classes["input-box"]}
          type="text"
          placeholder="Please type the book's name here..."
          value={search}
        ></input>
      </form>
      <div className={classes["output-container"]}>
        {books.slice(0,visibleBooks).map((book) => (
          <BookItem
            book={book}
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            image={
              book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.smallThumbnail
            }
            publishedDate={book.volumeInfo.publishedDate}
            publisher={book.volumeInfo.publisher}
            description={book.volumeInfo.description}
          />
        ))}

        {!isLoading && error && <h3>{error}</h3>}
      </div>
      <nav>
        <button className={classes.showbtn} onClick={showMoreBooks}>SHOW MORE</button>
      </nav>
    </div>
  );
};

export default Search;
