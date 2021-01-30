import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Input, Form} from './AddCategorStyle'


const AddCategory = (props) => {
    const {onSubmit} = props;

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputValue.length > 2 ){
            onSubmit(inputValue)
            setInputValue('')
        }
        console.log('submit ok');
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={inputValue}
                onChange={handleInputValue}
                placeholder="Name"
            />
        </Form>
    )
}

AddCategory.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default AddCategory;