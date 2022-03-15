import React from "react";
import "./search.css";

const Search = ({ placeholder, handleChange }) => (
  <div className="container">
    <input
      type="search"
      className="search-container"
      placeholder={placeholder}
      onChange={handleChange}
    />
  </div>
);

export default Search;
