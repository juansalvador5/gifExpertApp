import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Gifs from './Gifs';

const GifGrid = ({category}) => {

    const [gifs, setGifs] = useState([])
    
    useEffect(() => {
        getGift()
    },[])
    
    const getGift = () => {
        const API_KEY = 'WRQ4G53O8E5HBPVgrsWpBJEBJPp7t7u7'
        const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`
        return fetch(URL)
        .then(response => response.json())
        .then(data => {setGifs(data.data)})
        
        // return gifs.map(img => {
            //     gifs = {
                //             id: img.id,
                //             title: img.title,
                //             url: img.images.downsized_medium.url
                //         }
                //     })
    } 
    console.log('gifs:', gifs)
            
    // const getGift = async() => {
    //     const API_KEY = 'WRQ4G53O8E5HBPVgrsWpBJEBJPp7t7u7'
    //     const URL = `https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=${API_KEY}`;

    //     const response = await fetch(URL);
    //     const data = await response.json();
    //     console.log(data);    
    
    // } 

    // getGift();

    return(
        <>
            <h3>{category}</h3>
            <Gifs gifs={gifs} />
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default GifGrid;