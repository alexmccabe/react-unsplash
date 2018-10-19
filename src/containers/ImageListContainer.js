import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import httpUnsplash from 'http/unsplash';

class ImageListContainer extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    images: []
  };

  componentDidMount() {
    // Initiate get data here
    // this.getData();
  }

  getData = () => {
    httpUnsplash
      .get('/photos')
      .then(response => this.setState({ images: response.data }))
      .catch(err => console.error(err));
  };

  render() {
    console.log(this.props.images);
    return <div />;
    // return <ImageList images={this.props.images} />;
  }
}

const mapStateToProps = state => ({
  images: state.images
});

export default connect(mapStateToProps)(ImageListContainer);
