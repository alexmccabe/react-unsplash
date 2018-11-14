import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ScreensImageList from 'screens/Image/List';
import ScreensImageSingle from 'screens/Image/Single';

const ScreensRoot = () => {
  return (
    <BrowserRouter>
      <div className="site">
        <Switch>
          <Route path="/photos/:id" component={ScreensImageSingle} />
          {/*
         * Force a redirect if the user tries to access just /photos.
         * There's nothing  for them to see there, but it's technically
         * a valid route.
        */}
          <Redirect from="/photos/" to="/" />

          <Route path="/:filter(\w+)?" component={ScreensImageList} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default ScreensRoot;

{
  /* <Route path="/collections" component={CollectionsContainer} exact />

        <Route path="/photos/:id" component={SingleImageContainer} />

        <Route path="/:pageNum(\d+)?" component={ImageListContainer} exact />
        <Route
          path="/:filter(\w+)?/:pageNum?"
          component={ImageListContainer}
          exact
        />  */
}
