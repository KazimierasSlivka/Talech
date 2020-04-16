import React from 'react'
import { useForm } from 'react-hook-form';

import './ProductDetails.scss'

function ProductDetails(props) {
    const { handleSubmit, register, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

    function OnSave(inputFieldsValues) {
        props.SaveById(inputFieldsValues);
    }

    return (
        <div className="product-details-component">
            <h2>Product details</h2>
            <form
                className="form-group" 
                onSubmit={handleSubmit(OnSave)}
            >
                <div className="form-group">
                    <label>Price, €</label>
                    <input
                        class="form-control"
                        defaultValue={props.price}
                        name="price"
                        placeholder="Item price"
                        ref={register({
                            required: 'Price field can not be empty'
                        })}
                        step="0.01"
                        type="number"
                    />
                    <p className="text-danger text-center">{errors.price && errors.price.message}</p>
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input
                        class="form-control"
                        defaultValue={props.quantity}
                        name="quantity"
                        placeholder="Item quantity"
                        ref={register({
                            required: 'Quantity field can not be empty'
                        })}
                        step="1"
                        type="number"
                    />
                    <p className="text-danger text-center">{errors.quantity && errors.quantity.message}</p>
                </div>
                <div>
                    <button
                        className="talech-button maintenance-edit"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductDetails;