import React from 'react';
import { Link } from 'react-router-dom';

import FilterBar from './FilterBar';

const ImageList = ({ images }) => {
  return (
    <div>
      <FilterBar />

      {images.map(image => {
        return (
          <Link to={`/photos/${image.id}`} key={image.id}>
            <img src={image.urls.regular} alt="" />
          </Link>
        );
      })}
    </div>
  );
};

export default ImageList;
