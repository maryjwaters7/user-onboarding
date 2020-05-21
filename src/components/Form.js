import React, { useState, useEffect } from 'react';
import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is a required field.'),
    email: yup
        .string()
        .email('Must be a valid email address.')
        .required('Must include email address.'),
    password: yup
        .string()
        .min(6, 'Passwords must be at least 6 characters long.')
        .required('Password is required.'),
    terms: yup
        .boolean()
        .oneOf(
            [true], 'Please agree to terms of use.'
        )

});

const Form = props => {

    //initial state for inputs
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
    });

    //state for errors
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
    });

    //state for button disabled or not
    const [buttonDisabled, setButtonDisabled] = useState(true);

    //useEffect for buttonDisabled validation via formSchema
    useEffect( () => {
        formSchema
        .isValid(formState)
        .then(valid => {
            setButtonDisabled(!valid);
        });
    });

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ''
                });
            })
            .catch(err => {
                setErrors({
                    ...errors, 
                    [e.target.name]: err.errors[0]
                });
            });
    };

    //event handler for input change
    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name] : 
            e.target.type === 'checkbox' ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
    };

    return (

        <form onSubmit={formSubmit}>
            <label htmlFor='name'>Name
                <input 
                    id='name'
                    type='text'
                    name='name'
                    placeholder='Member Name'
                    value={formState.name}
                    onChange={inputChange}
                />
                {errors.name.length > 0 ? (
                <p className='error'>{errors.name}</p>
                 ) : null}
            </label>
            <label htmlFor='email'>Email
                <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='email'
                    value={formState.email}
                    onChange={inputChange}
                />
                {errors.email.length > 0 ? (
                    <p className='error'>{errors.email}</p>
                ) : null}
            </label>
            <label htmlFor='password'>Password
                <input
                    id='password'
                    type='password'
                    name='password'
                    placeholder='password'
                    value={formState.password}
                    onChange={inputChange}
                />
                {errors.password.length > 0 ? (
                    <p className='error'>{errors.password}</p>
                ) : null}
            </label>
            <label htmlFor='terms' className='terms'>Terms and Conditions
                <input
                    type='checkbox'
                    name='terms'
                    checked={formState.terms}
                    onChange={inputChange}
                />
            </label>
            <button type='submit' disabled={buttonDisabled}>
                Submit Form
            </button>
        </form>

    )
};

export default Form;