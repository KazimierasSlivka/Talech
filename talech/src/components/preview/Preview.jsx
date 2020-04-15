import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import ProductDetails from '../product details/ProductDetails';
import PriceHistory from '../price history/PriceHistory';
import QuantityHistory from '../quantity history/QuantityHistory';

function Preview() {
    const [isProductDetailsOpen, setIsProductDetailsOpen] = useState(true);
    const [isPriceHistoryOpen, setIsPriceHistoryOpen] = useState(false);
    const [isQuantityHistoryOpen, setIsQuantityHistoryOpen] = useState(false);
    const product = FindItemById();

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
        let oldPricesList = product.priceData;
        let oldQuantitiesList = product.quantityData;
        productsList[i].priceData = RewritePrices(oldPricesList, parseFloat(inputFieldsValues.price));
        productsList[i].quantityData = RewriteQuantities(oldQuantitiesList, parseFloat(inputFieldsValues.quantity));
        localStorage.setItem('Products List', JSON.stringify(productsList));
    }

    function RewritePrices(oldPricesList, newPrice) {
        let newPricesList = []
        if (newPrice !== oldPricesList[0].price) {
            newPricesList[0] = {
                "time": Date.now(),
                "price": newPrice
            }
            for (let i = 1; i < 5; i++)
                newPricesList[i] = oldPricesList[i - 1]
        }
        else
            newPricesList = oldPricesList;
        return newPricesList;
    }

    function RewriteQuantities(oldQuantitiesList, newQuantity) {
        let newQuantitiesList = [];
        if (newQuantity !== oldQuantitiesList[0].amount) {
            newQuantitiesList[0] = {
                "time": Date.now(),
                "amount": newQuantity
            }            
            for (let i = 1; i < 5; i++)
                newQuantitiesList[i] = oldQuantitiesList[i - 1]
        }
        else
            newQuantitiesList = oldQuantitiesList;
        return newQuantitiesList;
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