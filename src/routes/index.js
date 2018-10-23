import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ImageListContainer from 'containers/ImageListContainer';
import CollectionsContainer from 'containers/CollectionsContainer';
import SingleImageContainer from 'containers/SingleImageContainer';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/collections" component={CollectionsContainer} exact />

        <Route path="/photos/:id" component={SingleImageContainer} />
        <Redirect from="/photos/" to="/" />

        <Route path="/:pageNum(\d+)?" component={ImageListContainer} exact />
        <Route
          path="/:filter(\w+)?/:pageNum?"
          component={ImageListContainer}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
