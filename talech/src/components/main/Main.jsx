import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NotFound from '../not found/NotFound';
import Products from '../products/Products';
import Create   from '../create/Create';
import Edit     from '../edit/Edit';

function Main() {

    let productsList =
    [
      {
        "id": GenerateUniqueId(),
        "name": "Item0",
        "ean": "1234567890",
        "type": "Type0",
        "weight": "Weight0",
        "color": "Color0",
        "active": false,
        "quantity": 0,
        "price": 1
      },
      {
        "id": GenerateUniqueId(),
        "name": "Item1",
        "ean": "1234567890",
        "type": "Type1",
        "weight": "Weight1",
        "color": "Color1",
        "active": false,
        "quantity": 1,
        "price": 2
      },
      {
        "id": GenerateUniqueId(),
        "name": "Item2",
        "ean": "1234567890",
        "type": "Type2",
        "weight": "Weight2",
        "color": "Color2",
        "active": true,
        "quantity": 2,
        "price": 3
      },
      {
        "id": GenerateUniqueId(),
        "name": "Item3",
        "ean": "1234567890",
        "type": "Type3",
        "weight": "Weight3",
        "color": "Color3",
        "active": false,
        "quantity": 3,
        "price": 4
      },
      {
        "id": GenerateUniqueId(),
        "name": "Item4",
        "ean": "1234567890",
        "type": "Type4",
        "weight": "Weight4",
        "color": "Color4",
        "active": true,
        "quantity": 4,
        "price": 5
      }
    ]

  function FillDatabase() {
    localStorage.setItem('Products List', JSON.stringify(productsList));
    console.log(JSON.parse(localStorage.getItem('Products List')));
  }

  function GenerateUniqueId() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  useEffect(() => {
    FillDatabase();
  }, []);

    return (
        <main>
            <Switch>              
                <Route exact path="/">
                    <Redirect to="/products" />
                </Route>
                <Route exact path="/products" component={Products} />
                <Route path="/products/create" component={Create} />
                <Route path="/products/:id/edit" component={Edit} />
                <Route path="/notfound" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </main>
    );
}

export default Main;