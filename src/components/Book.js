import React from "react";
import CoverImage from "./CoverImage";
import Title from "./Title";
import Author from "./Author";

import "./../styles.scss";

const Book = () => {
  return (
    <div className="books">
      <CoverImage />
      <Title />
      <Author />
    </div>
  );
};

export default Book;
