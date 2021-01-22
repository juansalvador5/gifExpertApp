import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default AddCategory;