import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Form from '../form/Form';

function Create() {
    return (
        <>
            <h1>Create new product</h1>
            <Form
                formAction={"create"}
            />
        </>
    );
}

export default Create;