import React from 'react';
import './SearchBar.css'; // Import the CSS file

function SearchBar() {
  return (
    <form className="search-bar">
      <label htmlFor="search" className="sr-only">Search</label>
      <input 
        type="text" 
        id="search" 
        placeholder="Search" 
        className="search-input" 
      />
      <button type="submit" aria-label="Submit search" className="search-button">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f8cfd5037f5cb108a4cae3a0901051834efc45ed717074df42f04373ebbdf7c?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9" 
          alt="Search Icon" 
          className="search-icon"
        />
      </button>
    </form>
  );
}

export default SearchBar;
