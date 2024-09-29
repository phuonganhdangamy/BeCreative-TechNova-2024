import React from "react";
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header className="header-container">
      <nav className="header-nav">
        <div className="header-left">
          <div className="header-logo-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e5c2f5ccb66d611fd2a8d394f85f587ff0a923eb2ab15586ea77dcbe508f10b?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9"
              alt=""
              className="header-logo"
            />
          </div>
        </div>
        <div className="header-right">
          <div className="header-links-container">
            <div className="header-links">
              <a href="#mentors" className="header-link">Mentors</a>
              <a href="#profile" className="header-link">My Profile</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
