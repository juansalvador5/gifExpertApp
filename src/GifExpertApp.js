import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import {getGift} from './services/gifsServices';

const GifExpertApp = () => {

    const [categories, setCategories] = useState('');
    console.log('categories :', categories);
    const [gifs, setGifs] = useState([])
    console.log('gifs :', gifs);

    const handlegetGift = (categories) =>{
        getGift(categories)
                .then(data => {setGifs(data)})
    }

    const handleRequest = (nameGifs) =>{
    console.log('nameGifs :', nameGifs);

        setCategories(nameGifs)
        handlegetGift(nameGifs)
    }

    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory onSubmit={handleRequest} />
            <hr />

            <GifGrid gifs={gifs} />
        </>
    )
}

export default GifExpertApp;