import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import * as collectionsActions from 'actions/collections';
// import { getCollections } from 'reducers/collectionsReducer';

class CollectionsContainer extends Component {
  render() {
    console.log(this.props);
    return <div />;
  }
}

const mapStateToProps = ({ collections }) => {
  return {
    collections
  };
};

export default withRouter(connect(mapStateToProps)(CollectionsContainer));
