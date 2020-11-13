import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home'
import Client from '../views/Client';
import Product from '../views/Product';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cliente" exact component={Client}/>
                <Route path="/produtos" exact component={Product}/>
            </Switch>
        </BrowserRouter> 
    );
}

export default Routes;