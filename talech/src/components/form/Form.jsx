import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Form(props) {
    const { handleSubmit, register } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    const history = useHistory();
    const productsList = JSON.parse(localStorage.getItem('Products List'));

    function OnSave(inputFieldsValues) {
        if (props.formAction === "create")
            SaveOnCreate(inputFieldsValues);
        else 
            SaveOnEdit(inputFieldsValues);
        history.push('/products');
    }

    function SaveOnCreate(inputFieldsValues) {
        inputFieldsValues.id = props.GenerateUniqueId();
        productsList.push(inputFieldsValues);
        localStorage.setItem('Products List', JSON.stringify(productsList));
    }

    function SaveOnEdit(inputFieldsValues) {
        let i = FindItemIndexById()
        productsList[i].name = inputFieldsValues.name;
        productsList[i].ean = inputFieldsValues.ean;
        productsList[i].type = inputFieldsValues.type;
        productsList[i].weight = inputFieldsValues.weight;
        productsList[i].color = inputFieldsValues.color;
        localStorage.setItem('Products List', JSON.stringify(productsList));
    }

    function FindItemIndexById() {
        return productsList.findIndex(item => item.id === props.product.id);
    }

    return (
        <>
            <form onSubmit={handleSubmit(OnSave)}>
                <input
                    defaultValue={props.formAction === "edit" ? props.product.name : null}
                    name="name"
                    placeholder="Item name"
                    ref={register}
                    type="text"
                />
                <input
                    defaultValue={props.formAction === "edit" ? props.product.ean : null}
                    name="ean"
                    placeholder="Item EAN"
                    ref={register}
                    step="1"
                    type="number"
                />
                <input
                    defaultValue={props.formAction === "edit" ? props.product.type : null}
                    name="type"
                    placeholder="Item type"
                    ref={register}
                    type="text"
                />
                <input
                    defaultValue={props.formAction === "edit" ? props.product.weight : null}
                    name="weight"
                    placeholder="Item weight"
                    ref={register}
                    type="text"
                />
                <input
                    defaultValue={props.formAction === "edit" ? props.product.color : null}
                    name="color"
                    placeholder="Item color"
                    ref={register}
                    type="text"
                />
                <div>
                    <Link to="/products">
                        <button>
                            Cancel
                        </button>
                    </Link>
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
export default Form;