import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import ScreensImageList from 'screens/Image/List';
import ScreensImageSingle from 'screens/Image/Single';

/**
 * Root Component for the screens and the router.
 *
 * 1. Force a redirect if the user tries to access just /photos.
 *    There's nothing  for them to see there, but it's technically
 *    a valid route.
 */
const ScreensRoot = () => {
  return (
    <BrowserRouter>
      <div className="site">
        <Switch>
          <Route path="/photos/:id" component={ScreensImageSingle} />
          <Redirect from="/photos/" to="/" /> {/* [1] */}
          <Route path="/:filter(\w+)?" component={ScreensImageList} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default ScreensRoot;
