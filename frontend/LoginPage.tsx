import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import ImageSection from './ImageSection';

const LoginPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pl-10 bg-slate-800 max-md:pl-5">
      <div className="w-full max-w-[1361px] max-md:max-w-full">
        <Header />
      </div>
      <main className="self-end mt-24 w-full max-w-[1350px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <ImageSection />
          <LoginForm />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
