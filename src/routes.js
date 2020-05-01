import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Teste from './pages/Teste';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Teste} />
            </Switch>
        </BrowserRouter>
    );
}
