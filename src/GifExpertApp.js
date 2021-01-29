import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import { useFetchGifs } from './hooks/useFetchGifs';


const GifExpertApp = () => {

    const [categories, setCategories] = useState('');
    

    const {data} = useFetchGifs(categories);

    const handleRequest = (nameGifs) =>{
    console.log('nameGifs :', nameGifs);

        setCategories(nameGifs)
    }

    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory onSubmit={handleRequest} />
            <hr />

            <GifGrid gifs={data} />
        </>
    )
}

export default GifExpertApp;