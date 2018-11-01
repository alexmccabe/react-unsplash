import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import ImageList from './List';
import Loader from 'components/UI/Loader/Loader';

import * as imagesActions from 'actions/images';
import {
  getVisibleImages,
  getIsFetching,
  getPageNumber
} from 'reducers/imagesReducer';

class ImageListContainer extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    filter: PropTypes.string,
    isFetching: PropTypes.bool,
    pageNum: PropTypes.number,
    fetchImages: PropTypes.func
  };

  componentDidMount() {
    const { images } = this.props;

    if (!images.length) {
      this.fetchData();
    }
  }

  componentDidUpdate({ filter: prevFilter }) {
    const { filter: newFilter } = this.props;

    if (newFilter !== prevFilter) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { filter, pageNum, fetchImages } = this.props;

    fetchImages(filter, pageNum);
  };

  render() {
    const { images, isFetching, pageNum /* ...rest */ } = this.props;

    if (isFetching && pageNum === 1) {
      return <Loader />;
    }

    if (images.length) {
      return <ImageList images={images} />;
    }

    return <div>No images</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'latest';

  return {
    images: getVisibleImages(state, filter),
    isFetching: getIsFetching(state),
    pageNum: getPageNumber(state),
    filter
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    imagesActions
  )(ImageListContainer)
);
