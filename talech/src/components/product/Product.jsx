import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Product(props) {
    const [isProductDisabled, setIsproductDisabled] = useState();
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
                disabled = {props.active}
            >
                <td>{props.name}</td>
                <td>{props.ean}</td>
                <td>{props.type}</td>
                <td>{props.weight}</td>
                <td>{props.color}</td>
                <td>
                    <input
                        type="checkbox"
                        defaultChecked={props.active}
                    />
                </td>
                <td>{props.quantity}</td>
                <td>{props.price}</td>
                <td>
                    <Link to={"/products/" + props.id}>
                        <button>
                            View
                        </button>
                    </Link>
                    <Link to={"/products/" + props.id + "/edit"}>
                        <button>
                            Edit
                        </button>
                    </Link>
                    <button
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