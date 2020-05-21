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
        </form>

    )
};

export default Form;