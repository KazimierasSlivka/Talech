import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './Form.scss';

function Form(props) {
    const { handleSubmit, register, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
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
        let i = productsList.findIndex(item => item.id === props.product.id);
        productsList[i].name = inputFieldsValues.name;
        productsList[i].ean = inputFieldsValues.ean;
        productsList[i].type = inputFieldsValues.type;
        productsList[i].weight = inputFieldsValues.weight;
        productsList[i].color = inputFieldsValues.color;
        localStorage.setItem('Products List', JSON.stringify(productsList));
    }

    return (
        <>
            <form 
                className="form-component form-group"
                onSubmit={handleSubmit(OnSave)}
            >
                <div className="form-group">
                    <label>Name</label>
                    <input
                        class="form-control"
                        defaultValue={props.formAction === "edit" ? props.product.name : null}
                        name="name"
                        ref={register({
                            required: 'Name field can not be empty'
                        })}
                        type="text"
                    />
                    <p className="text-danger text-center">{errors.name && errors.name.message}</p>
                </div>
                <div className="form-group">
                    <label>EAN</label>
                    <input
                        class="form-control"
                        defaultValue={props.formAction === "edit" ? props.product.ean : null}
                        name="ean"
                        ref={register({
                            required: 'EAN field can not be empty'
                        })}
                        step="1"
                        type="number"
                    />
                    <p className="text-danger text-center">{errors.ean && errors.ean.message}</p>
                </div>
                <div className="form-group">
                    <label>Type</label> 
                    <input
                        class="form-control"
                        defaultValue={props.formAction === "edit" ? props.product.type : null}
                        name="type"
                        ref={register({
                            required: 'Type field can not be empty'
                        })}
                        type="text"
                    />
                    <p className="text-danger text-center">{errors.type && errors.type.message}</p>
                </div>
                <div className="form-group">
                    <label>Weight</label>
                    <input
                        class="form-control"
                        defaultValue={props.formAction === "edit" ? props.product.weight : null}
                        name="weight"
                        ref={register({
                            required: 'Weight field can not be empty'
                        })}
                        type="text"
                    />
                    <p className="text-danger text-center">{errors.weight && errors.weight.message}</p>
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <input
                        class="form-control"
                        defaultValue={props.formAction === "edit" ? props.product.color : null}
                        name="color"
                        ref={register({
                            required: 'Color field can not be empty'
                        })}
                        type="text"
                    />
                    <p className="text-danger text-center">{errors.color && errors.color.message}</p>
                </div>
                <div>
                    <button
                        type="submit"
                        className="talech-button maintenance-edit"
                    >
                        Save
                    </button>
                    <Link to="/products">
                        <button
                            className="talech-button maintenance-delete"
                        >
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </>
    );
}
export default Form;