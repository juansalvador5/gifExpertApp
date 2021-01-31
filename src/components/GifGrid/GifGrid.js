import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Gifs from '../Gifs';
import {Encabezado, H2} from './GifGridStyle'
import AddCategory from '../AddCategory';

import { useFetchGifs } from '../../hooks/useFetchGifs';

const GifGrid = () => {

    const [categories, setCategories] = useState('');
    const {data, loading} = useFetchGifs(categories);
    console.log('data :', data);
    
    const handleRequest = (nameGifs) =>{
        setCategories(nameGifs)
    }
   
    return(
        <>
            <Encabezado>
                <H2>Gif Expert App</H2>
                <AddCategory onSubmit={handleRequest} />
            </Encabezado>
            <hr />
            {   
                loading ? 'loading...' : 
                <Gifs gifs={data} />
            }
        </>
    )
}

GifGrid.propTypes = {
}

export default GifGrid;