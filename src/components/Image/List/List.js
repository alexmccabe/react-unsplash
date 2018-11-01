import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageListItem from './Item/Item';

import styles from './image-list.module.scss';

class ImageList extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  };

  render() {
    const { images } = this.props;

    return (
      <div className={styles.list}>
        {images.map(image => {
          return <ImageListItem image={image} key={image.id} />;
        })}
      </div>
    );
  }
}

export default ImageList;
