import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InitialPage from './pages/InitialPage';
import Login from './pages/Login';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={InitialPage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    );
}
