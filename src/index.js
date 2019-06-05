import React from "react";
import ReactDOM from "react-dom";

import Book from "./components/Book";

import "./styles.scss";

function Books() {
  return (
    <div className="App">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Books />, rootElement);
