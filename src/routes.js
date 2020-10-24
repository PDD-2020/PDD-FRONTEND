import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landingpage from './views/Landingpage'

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landingpage} />
            </Switch>
        </BrowserRouter> 

    );
}

export default Routes;