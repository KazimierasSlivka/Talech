import React, { useEffect } from 'react';
import './App.css';

import Main from './components/main/Main'


function App() {

  let productsList =
    [
      {
        "id": GenerateUniqueId(),
        "name": "Apples",
        "ean": "1234567890",
        "type": "Fruit",
        "weight": "0.1",
        "color": "Red",
        "active": false,
        "quantityData":
          [
            {
              "time":1586947746810,
              "amount": 156
            },
            {
              "time":1586944346810,
              "amount": 653
            },
            {
              "time":1586924346810,
              "amount": 788
            },
            {
              "time":1585924346810,
              "amount": 1200
            },
            {
              "time":1584924346810,
              "amount": 1514
            }
          ],
        "priceData": 
          [
            {
              "time":1586950000000,
              "price": 1.42
            },
            {
              "time":1586918079000,
              "price": 1.48
            },
            {
              "time":1586818079000,
              "price": 1.32
            },
            {
              "time":1586518079000,
              "price": 1.22
            },
            {
              "time":1586118079000,
              "price": 1.01
            }
          ]
      },
      // {
      //   "id": GenerateUniqueId(),
      //   "name": "Item1",
      //   "ean": "1234567890",
      //   "type": "Type1",
      //   "weight": "Weight1",
      //   "color": "Color1",
      //   "active": false,
      //   "quantity": 1,
      //   "price": 2
      // },
      // {
      //   "id": GenerateUniqueId(),
      //   "name": "Item2",
      //   "ean": "1234567890",
      //   "type": "Type2",
      //   "weight": "Weight2",
      //   "color": "Color2",
      //   "active": true,
      //   "quantity": 2,
      //   "price": 3
      // },
      // {
      //   "id": GenerateUniqueId(),
      //   "name": "Item3",
      //   "ean": "1234567890",
      //   "type": "Type3",
      //   "weight": "Weight3",
      //   "color": "Color3",
      //   "active": false,
      //   "quantity": 3,
      //   "price": 4
      // },
      // {
      //   "id": GenerateUniqueId(),
      //   "name": "Item4",
      //   "ean": "1234567890",
      //   "type": "Type4",
      //   "weight": "Weight4",
      //   "color": "Color4",
      //   "active": true,
      //   "quantity": 4,
      //   "price": 5
      // }
    ]


  useEffect(() => {
    FillDatabase();
    console.log(JSON.parse(localStorage.getItem('Products List')));
  }, []);

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

  return (
    <>
      <Main />
    </>
  );
}

export default App;
