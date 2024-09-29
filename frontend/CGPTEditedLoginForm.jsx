import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation or submit the form data
    if (!email || !password) {
      alert('Both fields are required!');
    } else {
      alert(`Email: ${email}, Password: ${password}`);
    }
  };

  return (
    <section className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
      <form onSubmit={handleSubmit} className="flex flex-col grow items-start text-xl font-semibold text-white whitespace-nowrap max-md:mt-10 max-md:max-w-full">
        <h1 className="text-4xl">Login</h1>
        
        {/* Email Field */}
        <label htmlFor="email" className="mt-8 max-md:ml-2">E-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex shrink-0 mt-1.5 max-w-full rounded-xl bg-slate-800 h-[50px] w-full max-w-[530px]"
          aria-label="Enter your email"
          aria-required="true"
          placeholder="Enter your email"
        />
        
        {/* Password Field */}
        <label htmlFor="password" className="mt-10 max-md:ml-2">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="flex shrink-0 mt-1.5 max-w-full rounded-xl bg-slate-800 h-[50px] w-full max-w-[530px]"
          aria-label="Enter your password"
          aria-required="true"
          placeholder="Enter your password"
        />

        {/* Submit Button */}
        <button type="submit" className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-lg">
          Submit
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
