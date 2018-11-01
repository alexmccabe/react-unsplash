import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const SingleImage = ({ image }) => {
  return (
    <div>
      <Link to="/">&lt; Back</Link>
      <img src={image.urls.regular} alt="" />
    </div>
  );
};

SingleImage.propTypes = {
  image: PropTypes.object.isRequired
};

export default SingleImage;
