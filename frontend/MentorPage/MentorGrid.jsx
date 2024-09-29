import React from 'react';
import MentorCard from './MentorCard';
import './MentorGrid.css'; // Import the CSS file

const mentors = [
  { name: "Name 1", occupation: "Occupation 1", education: "Education 1", interests: "Interests 1" },
  { name: "Name 2", occupation: "Occupation 2", education: "Education 2", interests: "Interests 2" },
  { name: "Name 3", occupation: "Occupation 3", education: "Education 3", interests: "Interests 3" },
  { name: "Name 4", occupation: "Occupation 4", education: "Education 4", interests: "Interests 4" },
];

function MentorGrid() {
  return (
    <section className="mentor-grid">
      <div className="mentor-row">
        {mentors.slice(0, 3).map((mentor, index) => (
          <div key={index} className="mentor-column">
            <MentorCard {...mentor} />
          </div>
        ))}
      </div>
      <div className="mentor-second-row">
        <div className="mentor-column mentor-column-large">
          <MentorCard {...mentors[3]} />
        </div>
        <div className="mentor-column mentor-column-empty" />
      </div>
    </section>
  );
}

export default MentorGrid;
