import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Product.scss';

function Product(props) {
    const [isProductDisabled, setIsProductDisabled] = useState(props.active);

    function DeleteProductByIdFromList() {
        let productsList = JSON.parse(localStorage.getItem('Products List'));
        let removeIndex = productsList.findIndex(item => item.id === props.id);
        productsList.splice(removeIndex, 1);
        localStorage.setItem('Products List', JSON.stringify(productsList));
        props.UpdateNow();
    }

    return (
        <>
            <tr
                className={props.quantity === 0 ? "quantity-empty" : null}
            >
                <td className="text-left">{props.name}</td>
                <td className="text-right">{props.ean}</td>
                <td className="text-right">{props.type}</td>
                <td className="text-right">{props.weight}</td>
                <td className="text-right">{props.color}</td>
                <td className="text-center">
                    <input
                        type="checkbox"
                        defaultChecked={props.active}
                        onChange={() => { setIsProductDisabled(!isProductDisabled) }}
                    />
                </td>
                <td className="text-right">{props.quantity}</td>
                <td className="text-right">{props.price}</td>
                <td className="text-center">
                    <Link to={"/products/" + props.id}>
                        <button
                            className="talech-button maintenance-view"
                            disabled={!isProductDisabled}
                        >
                            View
                        </button>
                    </Link>
                    <Link to={"/products/" + props.id + "/edit"}>
                        <button
                            className="talech-button maintenance-edit"
                            disabled={!isProductDisabled}
                        >
                            Edit
                        </button>
                    </Link>
                    <button
                        className="talech-button maintenance-delete"
                        disabled={!isProductDisabled}
                        onClick={DeleteProductByIdFromList}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
}

export default Product;