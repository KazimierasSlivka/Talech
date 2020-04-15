import React, { useState } from 'react';

function Product(props) {
    const [isProductDiabled, setIsproductDisabled] = useState();

    function DisableProduct(){
        
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
                        onChange
                    />
                </td>
                <td>{props.quantity}</td>
                <td>{props.price}</td>
                <td>
                    <button>View</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        </>
    );
}

export default Product;