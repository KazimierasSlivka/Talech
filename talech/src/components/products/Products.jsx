import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Product from '../product/Product';

import './Products.scss';

function Products() {
    const [productsList, setProductsList] = useState(JSON.parse(localStorage.getItem('Products List')));
    const [updateNow, setUpdateNow] = useState(false);

    useEffect(() => {
        setProductsList(JSON.parse(localStorage.getItem('Products List')));
    }, [updateNow])

    function UpdateNow() {
        setUpdateNow(!updateNow);
    }

    if (productsList.length !== 0)
        return (
            <>
                <h1>Products list</h1>
                <Link to="/products/create">
                    <button
                        className="talech-button maintenance-edit"    
                    >
                        Create new product
                    </button>
                </Link>
                <table 
                    cellspacing="0"
                >
                    <colgroup>
                        <col className="name-collumn" />
                        <col className="ean-collumn" />
                        <col className="type-collumn" />
                        <col className="weight-collumn" />
                        <col className="color-collumn" />
                        <col className="active-collumn" />
                        <col className="quantity-collumn" />
                        <col className="price-collumn" />
                        <col className="maintenance-collumn" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th className="text-center">Name</th>
                            <th className="text-center">EAN</th>
                            <th className="text-center">Type</th>
                            <th className="text-center">Weight</th>
                            <th className="text-center">Color</th>
                            <th className="text-center">Active</th>
                            <th className="text-center">Quantity</th>
                            <th className="text-center">Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsList.map((product) => (
                            <Product
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                ean={product.ean}
                                type={product.type}
                                weight={product.weight}
                                color={product.color}
                                active={product.active}
                                quantity={product.quantityData[0].amount}
                                price={product.priceData[0].price}
                                UpdateNow={UpdateNow}
                            />
                        ))}
                    </tbody>
                </table>
            </>
        )
    else
        return (
            <>
                <h1>Products list</h1>
                <h3>Products list is empty</h3>
                <Link to="/products/create">
                    <button
                        className="talech-button maintenance-edit"
                    >
                        Create new product
                    </button>
                </Link>
            </>
        );
}

export default Products;