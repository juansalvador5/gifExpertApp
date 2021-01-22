import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Gifs from './Gifs';

const GifGrid = ({category, gifs}) => {

   
    return(
        <>
            <Gifs category={category} gifs={gifs} />
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.array.isRequired,
}

export default GifGrid;