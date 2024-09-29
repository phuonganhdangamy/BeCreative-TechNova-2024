import React from 'react';
import PropTypes from 'prop-types';
import './ImageSection.css'; // Import the CSS file

const ImageSection = ({ imageUrl, altText }) => {
  return (
    <section className="image-section">
      <div className="image-section__container">
        <img
          loading="lazy"
          src={imageUrl}
          alt={altText}
          className="image-section__img"
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
