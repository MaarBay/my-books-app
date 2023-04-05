import Main from "./components/Main/Main";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WishList from "./components/Pages/Wishlist";
import Bookshelf from "./components/Pages/Bookshelf";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import GlobalProvider from "./context/GlobalState";

const App = () => {
  const [closeBanner, setCloseBanner] = useState(true);

  return (
    <GlobalProvider>
      {closeBanner && (
        <Banner close={closeBanner} onClose={() => setCloseBanner(false)} />
      )}
      <Header />
      <Routes>
        <Route path="*" element={<Main />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/bookshelf" element={<Bookshelf />}></Route>
      </Routes>
      <Footer />
    </GlobalProvider>
  );
};

export default App;
