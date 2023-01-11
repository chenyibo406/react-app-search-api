// import React from "react";
import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    // console.log("I need to tell the parent about some data");
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;

// Handling Text Inputs
// 1. Create a new piece of state
// 2. Create an event handler to watch for the 'onChange' event
// 3. When the 'onChange' event fires, get the value from the input
// 4. Take that value from the input and use it to updata your state
// 5. Pass your state to the input as the value props
