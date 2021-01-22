import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    console.log('categories :', categories);
    const [gifs, setGifs] = useState([])

    const handlegetGift = (categories) =>{
            const API_KEY = 'WRQ4G53O8E5HBPVgrsWpBJEBJPp7t7u7'
            const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${categories}&limit=10`
            
            return fetch(URL)
                .then(response => response.json()).then(data => {setGifs(data.data)})
    }

    const handleRequest = (nameGifs) =>{
        setCategories(nameGifs)
        handlegetGift(nameGifs)
    }

    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory 
                onSubmit={handleRequest} 
                />
            <hr />

            <GifGrid
                category={categories}
                gifs={gifs}
            />
        </>
    )
}

export default GifExpertApp;