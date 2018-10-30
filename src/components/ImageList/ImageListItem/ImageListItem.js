import React from 'react';
import { Link } from 'react-router-dom';

import styles from './image-list-item.module.scss';

const ImageListItem = ({ imageData }) => {
  return (
    <div className={styles.item}>
      <Link to={`/photos/${imageData.id}`} className={styles.link}>
        <style>
          {`#${imageData.id}::after {
            background-image: url(${imageData.urls.regular})
          }`}
        </style>
        <div className={styles.image} id={imageData.id} />
      </Link>
    </div>
  );
};

export default ImageListItem;
