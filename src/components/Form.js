import React from 'react';

const Form = props => {

    return (

        <form>
            <label htmlFor='name'>Name</label>
            <input 
                id='name'
                type='text'
                name='name'
                placeholder='Member Name'
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                name='email'
                placeholder='email'
            />
            <label htmlFor='password'>Password</label>
            <input
                id='password'
                type='password'
                name='password'
                placeholder='password'
            />
            <label htmlFor='terms' className='terms'>Terms and Conditions</label>
            <input
                type='checkbox'
                name='terms'
                checked={true} //Change this later to be dynamic
            />
            <button type='submit'>Submit Form</button>
        </form>

    )
};

export default Form;