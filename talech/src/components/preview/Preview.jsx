import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import ProductDetails from '../product details/ProductDetails';
import PriceHistory from '../price history/PriceHistory';
import QuantityHistory from '../quantity history/QuantityHistory';

function Preview() {
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(true);
    const [isPriceHistoryOpen, setIsPriceHistoryOpen] = useState(false);
    const [isQuantityHistoryOpen, setIsQuantityHistoryOpen] = useState(false);
    const [product, setProduct] = useState(JSON.parse(localStorage.getItem('Products List')));

    function ShowProductDetails() {
        setIsProductDetailsOpen(true);
        setIsPriceHistoryOpen(false);
        setIsQuantityHistoryOpen(false);
    }
    function ShowPriceHistory() {
        setIsProductDetailsOpen(false);
        setIsPriceHistoryOpen(true);
        setIsQuantityHistoryOpen(false);
    }
    function ShowQuantityHistory() {
        setIsProductDetailsOpen(false);
        setIsPriceHistoryOpen(false);
        setIsQuantityHistoryOpen(true);
    }

    return (
        <>
            <h1>Preview</h1>
            <Link to="/products">
                <button>
                    Back to products list
                </button>
            </Link>
            <div>
                <button onClick={ShowProductDetails}>Product details</button>
                <button onClick={ShowPriceHistory}>Price history</button>
                <button onClick={ShowQuantityHistory}>Quantity history</button>
            </div>
            {isProductDetailsOpen &&
                <ProductDetails
                    price= {product.price}
                    quantity={product.quantity} 
                />
            }
            {isPriceHistoryOpen && <PriceHistory />}
            {isQuantityHistoryOpen && <QuantityHistory />}
        </>
    );
}

export default Preview;