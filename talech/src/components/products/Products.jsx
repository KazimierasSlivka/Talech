import React from 'react';
import { Link } from 'react-router-dom';

import Product from '../product/Product';


function Products() {
    return (
        <>
            <h1>Products list</h1>
            <Link to="/products/create">
                <button>Create new item</button>
            </Link>
            <table>
                <colgroup>
                    <col className="name-collumn" />
                    <col className="ean-collumn" />
                    <col className="type-collumn" />
                    <col className="weight-collumn" />
                    <col className="color-collumn" />
                    <col className="active-collumn" />
                    <col className="quantity-collumn" />
                    <col className="price-collumn" />
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
                    </tr>
                </thead>
                <tbody>
                    {JSON.parse(localStorage.getItem('Products List')).map((product, index) => (
                        <Product
                            key={product.id}
                            name={product.name}
                            ean={product.ean}
                            type={product.type}
                            weight={product.weight}
                            color={product.color}
                            active={product.active}
                            quantity={product.quantity}
                            price={product.price}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Products;