import React, { useEffect } from 'react';
import './App.css';

import Main from './components/main/Main'


function App() {

  let productsList =
    [
      {
        "id": GenerateUniqueId(),
        "name": "Apple (Hard coded)",
        "ean": "1234567890",
        "type": "Fruit",
        "weight": 0.13,
        "color": "Red",
        "active": false,
        "quantityData":
          [
            {
              "time": 1586947746810,
              "amount": 156
            },
            {
              "time": 1586944346810,
              "amount": 653
            },
            {
              "time": 1586924346810,
              "amount": 788
            },
            {
              "time": 1585924346810,
              "amount": 1200
            },
            {
              "time": 1584924346810,
              "amount": 1514
            }
          ],
        "priceData":
          [
            {
              "time": 1586950000000,
              "price": 1.42
            },
            {
              "time": 1586918079000,
              "price": 1.48
            },
            {
              "time": 1586818079000,
              "price": 1.32
            },
            {
              "time": 1586518079000,
              "price": 1.22
            },
            {
              "time": 1586118079000,
              "price": 1.01
            }
          ]
      },
      {
        "id": GenerateUniqueId(),
        "name": "Orange (Hard Coded)",
        "ean": "1234567890",
        "type": "fruit",
        "weight": "0.17",
        "color": "Orange",
        "active": true,
        "quantityData":
          [
            {
              "time": 1586947746810,
              "amount": 333
            },
            {
              "time": 1586944346810,
              "amount": 267
            },
            {
              "time": 1586924346810,
              "amount": 87
            },
            {
              "time": 1585924346810,
              "amount": 445
            },
            {
              "time": 1584924346810,
              "amount": 318
            }
          ],
        "priceData":
          [
            {
              "time": 1586950000000,
              "price": 1.99
            },
            {
              "time": 1586918079000,
              "price": 1.86
            },
            {
              "time": 1586818079000,
              "price": 1.90
            },
            {
              "time": 1586518079000,
              "price": 1.7
            },
            {
              "time": 1586118079000,
              "price": .99
            }
          ]
      },
      {
        "id": GenerateUniqueId(),
        "name": "Potato (Hard coded)",
        "ean": "1234567890",
        "type": "Vegetable",
        "weight": "0.09",
        "color": "Brown",
        "active": true,
        "quantityData":
          [
            {
              "time": 1586947746810,
              "amount": 1888
            },
            {
              "time": 1586944346810,
              "amount": 1987
            },
            {
              "time": 1586924346810,
              "amount": 2022
            },
            {
              "time": 1585924346810,
              "amount": 2567
            },
            {
              "time": 1584924346810,
              "amount": 3000
            }
          ],
        "priceData":
          [
            {
              "time": 1586950000000,
              "price": .49
            },
            {
              "time": 1586918079000,
              "price": .55
            },
            {
              "time": 1586818079000,
              "price": .76
            },
            {
              "time": 1586518079000,
              "price": .89
            },
            {
              "time": 1586118079000,
              "price": .99
            }
          ]
      }
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
