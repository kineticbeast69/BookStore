import React, { Children } from "react";
import BookProvider from "./context/bookContext";
import { Outlet } from "react-router-dom";
// componets section over here
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <BookProvider props={Children}>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </BookProvider>
  );
}

export default App;
