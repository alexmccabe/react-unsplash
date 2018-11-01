import React from 'react';

import ImageFilterBar from 'components/Image/FilterBar/FilterBar';
import ImageListContainer from 'components/Image/List/ListContainer';

const ScreensImageList = () => {
  return (
    <div id="screen-image-list">
      <ImageFilterBar />
      <ImageListContainer />
    </div>
  );
};

export default ScreensImageList;
