import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import React from 'react'
import './SearchBar.css';


export const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleSearch = async (event) => {

    try {
      let key = event.target.value;
      const result = await fetch(
        `http://localhost:4000/search/${key}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      result = await result.json();

      setInput(result);


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);
  console.log(input);

  return (
    <div className="searchbar-input-wrapper">
      <FaSearch id="search-icon" />
      <input type="text"
        placeholder="Search"
        onChange={handleSearch} />
      {/* <ul>
        {input?.data.map((result)=>(
          <li>{result.paperName}</li>
        ))}
      </ul> */}

    </div>
  );
};

export default SearchBar
