import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from 'components/Landing/Landing';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
