import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as imagesActions from 'actions/images';

import { getImage, getIsFetching } from 'reducers/imagesReducer';

import SingleImage from 'components/SingleImage/SingleImage';
import Loader from 'components/Loader/Loader';

class SingleImageContainer extends Component {
  static defaultProps = {};
  static propTypes = {};

  componentDidMount() {
    if (!this.props.image) {
      this.fetchImage();
    }
  }

  fetchImage() {
    const { id, fetchSingleImage } = this.props;

    fetchSingleImage(id);
  }

  render() {
    const { image, isFetching } = this.props;

    if (!image || isFetching) {
      return <Loader />;
    }

    return <SingleImage image={image} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;

  return {
    image: getImage(state, id),
    isFetching: getIsFetching(state),
    id
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    imagesActions
  )(SingleImageContainer)
);
