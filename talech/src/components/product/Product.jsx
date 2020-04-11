import React from 'react';

function Product(props) {
    return(
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
                        checked={props.active}
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