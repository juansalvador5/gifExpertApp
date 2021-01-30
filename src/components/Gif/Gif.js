import React from 'react';
import { Card, Image, H5 } from './GifStyle';

const Gif = ({image, title}) => {
    return(
        <>
                <Image src={image} alt={title} />
        </>
    )
}

export default Gif;