import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InitialPage from './pages/InitialPage';
import Login from './pages/Login';
import Register from './pages/Register';
import MyNotes from './pages/MyNotes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={InitialPage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/myNotes" component={MyNotes} />
            </Switch>
        </BrowserRouter>
    );
}
