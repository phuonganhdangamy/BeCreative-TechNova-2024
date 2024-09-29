import React from "react";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";
import SkillsInterests from "./SkillsInterests";
import ItemList from "./ItemList";
import './ProfilePage.css'; // Import the CSS file

function ProfilePage() {
  return (
    <main className="profile-page-container">
      <Header />
      <ProfileInfo />
      <section className="profile-section" aria-label="Profile section" />
      <SkillsInterests />
      <section className="item-list-section">
        <div className="item-list-container">
          <ItemList
            title="Skills"
            items={["CI/CD", "Machine Learning", "Python", "Pytorch"]}
          />
          <ItemList
            title="Interests"
            items={[
              "Artificial Intelligence",
              "Blockchain",
              "Gender Equality in Tech",
              "Travelling",
            ]}
          />
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;
