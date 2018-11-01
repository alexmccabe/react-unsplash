import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './image-list-item.module.scss';

const ImageListItem = ({ image }) => {
  return (
    <div className={styles.item}>
      <Link to={`/photos/${image.id}`} className={styles.link}>
        <style>
          {`#${image.id}::after {
            background-image: url(${image.urls.regular})
          }`}
        </style>
        <div className={styles.image} id={image.id} />
      </Link>
    </div>
  );
};

ImageListItem.propTypes = {
  image: PropTypes.object.isRequired
};

export default ImageListItem;
