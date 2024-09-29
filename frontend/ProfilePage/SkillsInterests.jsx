import React from "react";
import './SkillsInterests.css'; // Import the CSS file

function SkillsInterests() {
  return (
    <section className="skills-interests-container">
      <div className="skills-box">
        <button className="skills-button">Skills +</button>
      </div>
      <div className="interests-box">
        <button className="interests-button">Interests +</button>
      </div>
    </section>
  );
}

export default SkillsInterests;
