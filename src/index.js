import React from "react";
import reactDOM from "react-dom";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import ImageDemo from "./components/ImageDemo";
import Page from "./components/Page";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return(   
    <div>
        <Header />
      <div className="mid"> 
        <ImageDemo />
        <SearchBox />
      </div>
      <div className="page">
        <Page />
      </div>
        <Footer />
    </div>
    )};

reactDOM.render(<App />,  document.querySelector('#root'))