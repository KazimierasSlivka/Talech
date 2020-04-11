import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Create() {
    const { handleSubmit, register } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' });
    const history = useHistory();

    function OnSave(formInputFieldsValues){
        let data = JSON.parse(localStorage.getItem('Products List'));
        formInputFieldsValues.id = data.length;
        data.push(formInputFieldsValues);
        localStorage.setItem('Products List',  JSON.stringify(data));
        history.push('/products');
    }

    return (
        <>
            <h1>Create new item</h1>
            <form onSubmit={handleSubmit(OnSave)}>
                <input 
                    type="text"
                    name="name"                    
                    placeholder="Item name"
                    ref={register}
                />
                <input 
                    type="number"
                    name="ean"
                    step="1" 
                    placeholder="Item EAN"
                    ref={register}
                />
                <input 
                    type="text"
                    name="type" 
                    placeholder="Item type"
                    ref={register}
                />
                <input 
                    type="text" 
                    name="weight"
                    placeholder="Item weight"
                    ref={register}
                />
                <input 
                    type="text" 
                    name="color"
                    placeholder="Item color"
                    ref={register}
                />
                <input 
                    name="active"
                    type="checkbox" 
                    ref={register}
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

export default Create;