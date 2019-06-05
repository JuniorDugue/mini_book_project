import React from "react";

const authorStyle = {
  letterSpacing: "10px",
  color: "black"
};

const Author = () => {
  return (
    <div>
      <p style={authorStyle}>by Marijn Haverbeke</p>
    </div>
  );
};

export default Author;
