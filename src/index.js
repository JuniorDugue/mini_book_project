import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Books() {
  return (
    <div className="App">
      <Book />
      <Book />
      <Book />
    </div>
  );
}

const Book = () => {
  return <h1>This is a book</h1>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Books />, rootElement);
