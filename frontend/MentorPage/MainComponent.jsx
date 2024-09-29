import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import MentorGrid from './MentorGrid';
import './MainComponent.css'; // Import the CSS file

function MainComponent() {
  return (
    <main className="main-container">
      <Header />
      <h1 className="main-title">Find a match right for you!</h1>
      <SearchBar />
      <MentorGrid />
    </main>
  );
}

export default MainComponent;
