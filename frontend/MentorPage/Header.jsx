import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="header-container">
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e312c81c4cece08ff6f8e7beceebc9438e525d0e1e3e6602b4a47b99e17d5b18?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9" 
        alt="Logo" 
        className="header-logo"
      />
      <nav className="header-nav">
        <a href="#mentors" className="nav-link">Mentors</a>
        <a href="#profile" className="nav-link">My Profile</a>
      </nav>
    </header>
  );
}

export default Header;
