import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const handleAddCategorie = (category) => {
    //      setCategories([...categories,category]);
    //      console.log(categories)
    //  }
    //  console.log(categories)

    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory 
                setCategories={setCategories} 
                categories={categories}/>
            <hr />

            <ol>
                {
                    categories.map( category => {
                        return <li key={category}>
                            {category}
                        </li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;