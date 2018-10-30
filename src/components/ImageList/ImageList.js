import React from 'react';

import FilterBar from './FilterBar';
import ImageListItem from './ImageListItem/ImageListItem';

import styles from './image-list.module.scss';

const ImageList = ({ images }) => {
  return (
    <div>
      <FilterBar />

      <div className={styles.list}>
        {images.map(image => {
          return <ImageListItem imageData={image} key={image.id} />;
        })}
      </div>
    </div>
  );
};

export default ImageList;
