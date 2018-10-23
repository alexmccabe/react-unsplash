import React from 'react';
import { Link } from 'react-router-dom';

const SingleImage = ({ image }) => {
  return (
    <div>
      <Link to="/">&lt; Back</Link>
      <img src={image.urls.regular} alt="" />
    </div>
  );
};

export default SingleImage;
