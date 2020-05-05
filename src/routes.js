import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InitialPage from './pages/InitialPage';
import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={InitialPage} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}
