import React from "react";
import './ProfileInfo.css'; // Import the CSS file

function ProfileInfo() {
  return (
    <section className="profile-info-container">
      <div className="profile-info-content">
        <div className="profile-info-left">
          <div className="profile-info-left-inner">
            <div className="profile-info-main">
              <div className="profile-info-text">
                <div className="profile-card">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9790d7c79d480062c6d05b2b8995387eab1b093c78e0416217d91d937ef67d4?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9"
                    alt=""
                    className="profile-card-background"
                  />
                  <h1 className="profile-card-name">Name</h1>
                  <p className="profile-card-education">Education</p>
                </div>
              </div>
              <div className="profile-info-role">
                <div className="profile-role-box">Role</div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-info-right">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1975461196795ea0a6e308d40b61ab675af6619bf6dbe4cee08fb9abffd4419?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9"
            alt="Profile visualization"
            className="profile-visualization"
          />
        </div>
      </div>
    </section>
  );
}

export default ProfileInfo;
