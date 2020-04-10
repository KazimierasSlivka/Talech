import React from 'react';
import { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../not found/NotFound';
import Products from '../products/Products';


//import './Main.scss';

function Main(props) {

    let productsList =     
    [
        {
            "id" : 0,
            "name" : "Item0",
            "ean" : "1234567890",
            "type" : "Type0",
            "weight" : "Weight0",
            "color" : "Color0",
            "active" : false,
            "quantity" : 0,
            "price" : 1
        },
        {
            "id" : 1,
            "name" : "Item1",
            "ean" : "1234567890",
            "type" : "Type1",
            "weight" : "Weight1",
            "color" : "Color1",
            "active" : false,
            "quantity" : 0,
            "price" : 2
        },
        {
            "id" : 2,
            "name" : "Item2",
            "ean" : "1234567890",
            "type" : "Type2",
            "weight" : "Weight2",
            "color" : "Color2",
            "active" : true,
            "quantity" : 0,
            "price" : 3
        },
        {
            "id" : 3,
            "name" : "Item3",
            "ean" : "1234567890",
            "type" : "Type3",
            "weight" : "Weight3",
            "color" : "Color3",
            "active" : false,
            "quantity" : 0,
            "price" : 4
        },
        {
            "id" : 4,
            "name" : "Item4",
            "ean" : "1234567890",
            "type" : "Type4",
            "weight" : "Weight4",
            "color" : "Color4",
            "active" : true,
            "quantity" : 0,
            "price" : 5
        }
    ]

    function FillDatabase(){
        localStorage.setItem('Products List',  JSON.stringify(productsList));
        console.log(JSON.parse(localStorage.getItem('Products List')));
    }

    useEffect(() => {
        FillDatabase();
    }, []);

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
                    <Products  />
                </Route>

                <Route component={NotFound} />
            </Switch>
        </main>
    );
}

export default Main;