import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
            <tr>
                <td>{props.name}</td>
                <td>{props.ean}</td>
                <td>{props.type}</td>
                <td>{props.weight}</td>
                <td>{props.color}</td>
                <td>
                    <input
                        type="checkbox"
                        defaultChecked={props.active}
                        onChange={()=>{setIsProductDisabled(!isProductDisabled)}}
                    />
                </td>
                <td>{props.quantity}</td>
                <td>{props.price}</td>
                <td>
                    <Link to={"/products/" + props.id}>
                        <button
                            disabled={!isProductDisabled}
                        >
                            View
                        </button>
                    </Link>
                    <Link to={"/products/" + props.id + "/edit"}>
                        <button
                            disabled={!isProductDisabled}
                        >
                            Edit
                        </button>
                    </Link>
                    <button
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