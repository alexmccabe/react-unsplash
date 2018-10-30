import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import * as imagesActions from 'actions/images';
import {
  getVisibleImages,
  getIsFetching,
  getPageNumber
} from 'reducers/imagesReducer';

import ImageList from 'components/ImageList/ImageList';
import Loader from 'components/Loader/Loader';

class ImageListContainer extends Component {
  static defaultProps = {};
  static propTypes = {};

  componentDidMount() {
    if (!this.props.images.length) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { filter, pageNum, fetchImages } = this.props;

    fetchImages(filter, pageNum);
  };

  render() {
    const { images, isFetching /* ...rest */ } = this.props;

    if (isFetching && !images.length) {
      return <Loader />;
    }

    return <ImageList images={images} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'latest';
  // const pageNum = ownProps.match.params.pageNum || 1;

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
