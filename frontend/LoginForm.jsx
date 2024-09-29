import React from 'react';

function LoginForm() {
  return (
    <section className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
      <form className="flex flex-col grow items-start text-xl font-semibold text-white whitespace-nowrap max-md:mt-10 max-md:max-w-full">
        <h1 className="text-4xl">Login</h1>
        <label htmlFor="email" className="mt-8 max-md:ml-2">E-mail</label>
        <input
          type="email"
          id="email"
          className="flex shrink-0 mt-1.5 max-w-full rounded-xl bg-slate-800 h-[50px] w-[530px]"
          aria-label="Enter your email"
        />
        <label htmlFor="password" className="mt-10 max-md:ml-2">Password</label>
        <input
          type="password"
          id="password"
          className="flex shrink-0 mt-1.5 max-w-full rounded-xl bg-slate-800 h-[50px] w-[530px]"
          aria-label="Enter your password"
        />
        <div className="flex shrink-0 self-end mt-9 max-w-full border border-solid bg-slate-800 border-zinc-300 h-[389px] rotate-[0.3490658542884141rad] w-[685px]" />
      </form>
    </section>
  );
}

export default LoginForm;
