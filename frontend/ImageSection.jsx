import React from 'react';

const ImageSection = () => {
  return (
    <section className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-center px-2.5 py-3 w-full rounded-md bg-slate-700 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c95ef55b819cccb48a4b46d4b56c5ec7fb936cca9afb3e5774187de796ff282?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9"
          alt="Sample Image"
          className="object-contain w-full rounded-md aspect-[1.5] max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default ImageSection;
