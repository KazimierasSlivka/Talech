import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import ProductDetails from '../product details/ProductDetails';
import PriceHistory from '../price history/PriceHistory';
import QuantityHistory from '../quantity history/QuantityHistory';

function Preview() {
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(true);
    const [isPriceHistoryOpen, setIsPriceHistoryOpen] = useState(false);
    const [isQuantityHistoryOpen, setIsQuantityHistoryOpen] = useState(false);
    const [product, setProduct] = useState(FindItemById());

    useEffect(() => {
        console.log('preview',FindItemById());
    }, [])

    function GetIdByUrl() {
        let urlParameters = window.location.pathname.split("/");
        return urlParameters[2];
    }

    function FindItemById() {
        let productsList = JSON.parse(localStorage.getItem('Products List'));
        let product = productsList.find(item => item.id === GetIdByUrl());
        return product;
    }

    function SaveById(inputFieldsValues) {
        let productsList = JSON.parse(localStorage.getItem('Products List'));
        let i = productsList.findIndex(item => item.id === product.id);
        productsList[i].price = inputFieldsValues.price;
        productsList[i].quantity = inputFieldsValues.quantity;
        localStorage.setItem('Products List', JSON.stringify(productsList));
    }

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
                    price={product.priceData[0].price}
                    quantity={product.quantityData[0].amount}
                    SaveById={SaveById}
                />
            }
            {isPriceHistoryOpen && 
                <PriceHistory 
                    priceHistoryData={product.priceData}
                />
            }
            {isQuantityHistoryOpen && 
                <QuantityHistory 
                    quantityHistoryData={product.quantityData}
                />
            }
        </>
    );
}

export default Preview;