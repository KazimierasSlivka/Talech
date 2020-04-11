import React from 'react';
import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from '../not found/NotFound';
import Products from '../products/Products';
import Create   from '../create/Create';


//import './Main.scss';

function Main(props) {

    return (
        <main>
            <Switch>
                {/*
                <Route path="/maintaining_list">
                    <PortalsList setName={props.setName} setSurname={props.setSurname} />
                </Route>

                <Route path="/users">
                    <Users setName={props.setName} setSurname={props.setSurname} />
                </Route>

                <Route path="/deleted_portals">
                    <DeletedPortalsList setName={props.setName} setSurname={props.setSurname} />
                </Route>

                <Route path="/login">
                    <Login setName={props.setName} setSurname={props.setSurname} />
                </Route>

                <Route path="/logout">
                    <Logout setName={props.setName} setSurname={props.setSurname} />
                </Route> */}
                
                <Route exact path="/">
                    <Redirect to="/products" />
                </Route>
                <Route exact path="/products" component={Products} />
                <Route path="/products/create" component={Create} />
                <Route component={NotFound} />
            </Switch>
        </main>
    );
}

export default Main;