import React from "react";
import "./style.css";

function SearchBtn(props) {
  return (
    <button className="search-btn" {...props} tabIndex="0">
      Search Google Books
    </button>
  );
}

export default SearchBtn;
