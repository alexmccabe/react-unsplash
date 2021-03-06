import React, { Component, createRef } from 'react';
import Measure from 'react-measure';

import Navigation from 'components/UI/Navigation/Navigation';
import ImageListContainer from 'components/Image/List/ListContainer';
import { setStyle } from 'utils';

import { filterMenuItems } from 'config';

class ScreensImageList extends Component {
  containerRef = createRef();
  state = {
    filterMenuHeight: 0
  };

  onMeasureResize = ({ bounds }) => {
    const { height } = bounds;

    if (height !== this.state.filterMenuHeight) {
      setStyle(this.containerRef.current, { paddingTop: `${height}px` });

      this.setState({ filterMenuHeight: height });
    }
  };

  render() {
    return (
      <div id="screen-image-list" ref={this.containerRef}>
        <Measure bounds onResize={this.onMeasureResize}>
          {({ measureRef }) => {
            return <Navigation ref={measureRef} navItems={filterMenuItems} />;
          }}
        </Measure>
        <ImageListContainer />
      </div>
    );
  }
}

export default ScreensImageList;
