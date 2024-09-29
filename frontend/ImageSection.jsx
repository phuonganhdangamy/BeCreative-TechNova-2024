import React from 'react';
import PropTypes from 'prop-types';

const ImageSection = ({ imageUrl, altText }) => {
  return (
    <section className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col justify-center px-2.5 py-3 w-full rounded-md bg-slate-700 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt={altText}
          className="object-contain w-full rounded-md aspect-[1.5] max-md:max-w-full"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300'; // Fallback image in case of error
          }}
        />
      </div>
    </section>
  );
};

ImageSection.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

ImageSection.defaultProps = {
  imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6c95ef55b819cccb48a4b46d4b56c5ec7fb936cca9afb3e5774187de796ff282?placeholderIfAbsent=true&apiKey=8334832cff474ef69011196ad1797df9',
  altText: 'Sample Image',
};

export default ImageSection;
