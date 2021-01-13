import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = (props) => {
    const {setCategories, categories} = props;

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputValue.length > 2 ){
            setCategories([...categories, inputValue ])
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
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
}

export default AddCategory;