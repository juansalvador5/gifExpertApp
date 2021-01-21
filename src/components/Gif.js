import React from 'react';
import styled from 'styled-components';

const Gif = ({key, image, title}) => {
console.log('key :', key);
console.log('image :', image);

const Image = styled.img`
    max-width: 300px;
    margin: 5px;
`

    return(
        <>
            <Image src={image} alt={title} />
        </>
    )
}

export default Gif;