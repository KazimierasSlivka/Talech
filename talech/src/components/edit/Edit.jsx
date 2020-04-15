import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../form/Form';

function Edit() {
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

    if (product != null)
        return (
            <>
                <h1>Edit</h1>
                <Form
                    formAction={"edit"}
                    product={product}
                />
            </>
        )
    return (
        <>
            <h1>Product was not found</h1>
            <Link to="/products">
                <button>
                    Back to products list
                </button>
            </Link>
        </>
    );
}

export default Edit;