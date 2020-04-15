import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

function ProductDetails(props) {
    const { handleSubmit, register } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

    useEffect(() => {
        console.log(props);
    }, [])

    function OnSave(inputFieldsValues) {
        props.SaveById(inputFieldsValues);
    }

    return (
        <>
            <h2>Product details</h2>
            <form onSubmit={handleSubmit(OnSave)}>
                <input
                    defaultValue={props.price}
                    name="price"
                    placeholder="Item price"
                    ref={register}
                    step="0.01"
                    type="number"
                />
                <input
                    defaultValue={props.quantity}
                    name="quantity"
                    placeholder="Item quantity"
                    ref={register}
                    step="1"
                    type="number"
                />
                <div>
                    <button
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}

export default ProductDetails;