import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from '../not found/NotFound';
import Products from '../products/Products';
import Create from '../create/Create';
import Edit from '../edit/Edit';
import Preview from '../preview/Preview';

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/products" />
                </Route>
                <Route exact path="/products" component={Products} />
                <Route path="/products/create" component={Create} />
                <Route path="/products/:id/edit" component={Edit} />
                <Route path="/products/:id" component={Preview} />
                <Route path="/notfound" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </main>
    );
}

export default Main;