import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Homepage } from 'components';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Homepage} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
