import React from "react";
import ReactDOM from "react-dom";

import Book from "./components/Book";

import "./styles.scss";
import CoverImage from "./components/CoverImage";

function Books() {
  return (
    <div className="App">
      <Book />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Books />, rootElement);
