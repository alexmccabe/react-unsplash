import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as imagesActions from 'actions/images';

import { getImage, getIsFetching } from 'reducers/imagesReducer';

import SingleImage from './Single';
import Loader from 'components/UI/Loader/Loader';

class SingleImageContainer extends Component {
  static propTypes = {
    id: PropTypes.string,
    image: PropTypes.object,
    isFetching: PropTypes.bool,
    fetchSingleImage: PropTypes.func
  };

  componentDidMount() {
    const { image } = this.props;

    if (!image) {
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
