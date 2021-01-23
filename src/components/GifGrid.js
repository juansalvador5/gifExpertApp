import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Gifs from './Gifs';

const GifGrid = ({gifs}) => {

   
    return(
        <>
            <Gifs gifs={gifs} />
        </>
    )
}

GifGrid.propTypes = {
}

export default GifGrid;