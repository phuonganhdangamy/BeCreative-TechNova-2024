import React from 'react';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  return (
    <section className="login-form">
      <form className="login-form__container">
        <h1 className="login-form__title">Login</h1>
        
        {/* Email Field */}
        <label htmlFor="email" className="login-form__label">E-mail</label>
        <input
          type="email"
          id="email"
          className="login-form__input"
          aria-label="Enter your email"
          placeholder="Enter your email"
        />
        
        {/* Password Field */}
        <label htmlFor="password" className="login-form__label">Password</label>
        <input
          type="password"
          id="password"
          className="login-form__input"
          aria-label="Enter your password"
          placeholder="Enter your password"
        />

        {/* Graphic or Border Element */}
        <div className="login-form__graphic" />
      </form>
    </section>
  );
};

export default LoginForm;
