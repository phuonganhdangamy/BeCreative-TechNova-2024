import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f828857f9d34e5a3b5fefe58eae6f39cbd3ef1958316f35c7c4d514b04b03f?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9"
          alt=""
          className="header__img"
        />
      </div>
      <nav className="header__nav">
        <div className="header__nav-container">
          <div className="header__nav-links">
            <div className="header__nav-item">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a6d25d3fe02a4ca158071c6d9da5bf4aef77b5090f750dacd84a193c1e4edff?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9"
                alt=""
                className="header__nav-img"
              />
            </div>
            <div className="header__nav-title">
              <h2 className="header__title">Mentors</h2>
            </div>
            <div className="header__nav-title">
              <h2 className="header__title">My Profile</h2>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
