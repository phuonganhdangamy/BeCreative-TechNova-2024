import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import ImageSection from './ImageSection';
import './LoginPage.css';  // Import the CSS file

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="login-header">
        <Header />
      </div>
      <main className="login-main">
        <div className="login-content">
          <ImageSection />
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
