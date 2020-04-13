import React, {useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Form(props) {
    const { handleSubmit, register } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    const history = useHistory();
    const productsList = JSON.parse(localStorage.getItem('Products List'));

    useEffect(() => {
        console.log(FindItemIndexById());
      }, []);

    function OnSave(inputFieldsValues) {
        if (props.formAction === "create")
            SaveOnCreate(inputFieldsValues);
        else 
            SaveOnEdit(inputFieldsValues);
        history.push('/products');
    }

    function SaveOnCreate(inputFieldsValues) {
        inputFieldsValues.id = productsList.length;
        productsList.push(inputFieldsValues);
        localStorage.setItem('Products List', JSON.stringify(productsList));
    }

    function SaveOnEdit(inputFieldsValues) {
        console.log();
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
                <input
                    defaultChecked={props.formAction === "edit" ? props.product.active : null}
                    name="active"
                    ref={register}
                    type="checkbox"
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