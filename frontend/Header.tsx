import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5f828857f9d34e5a3b5fefe58eae6f39cbd3ef1958316f35c7c4d514b04b03f?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9" alt="Company logo" className="object-contain shrink-0 max-w-full aspect-[1.67] w-[250px] max-md:mt-10" />
      </div>
      <nav className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
        <div className="grow max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[53%] max-md:ml-0 max-md:w-full">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a6d25d3fe02a4ca158071c6d9da5bf4aef77b5090f750dacd84a193c1e4edff?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9" alt="Navigation banner" className="object-contain grow w-full aspect-[1.73] max-md:mt-10" />
            </div>
            <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
              <a href="#mentors" className="mt-8 text-4xl text-white max-md:mt-10" tabIndex={0}>Mentors</a>
            </div>
            <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
              <a href="#profile" className="mt-8 text-4xl text-white max-md:mt-10" tabIndex={0}>My Profile</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
