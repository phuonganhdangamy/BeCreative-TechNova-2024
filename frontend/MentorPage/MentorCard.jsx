import React from 'react';
import './MentorCard.css'; // Import the CSS file

function MentorCard({ name, occupation, education, interests }) {
  return (
    <article className="mentor-card">
      <header className="mentor-card-header">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b99e1f47c8a4352bba2bc6e5c1b547b78a9437292ab82b1063c70abcd8bec33?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9" 
          alt={`Profile picture of ${name}`} 
          className="mentor-card-image" 
        />
        <h2 className="mentor-card-name">{name}</h2>
      </header>
      <div className="mentor-card-details">
        <p>Occupation: {occupation}</p>
        <p>Education: {education}</p>
        <p>Interests: {interests}</p>
      </div>
    </article>
  );
}

export default MentorCard;
