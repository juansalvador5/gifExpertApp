import React from 'react';
import styled from 'styled-components';

const Gif = ({image, title}) => {

const Image = styled.img`
    margin: 5px;
`

    return(
        <>
            <Image src={image} alt={title} />
        </>
    )
}

export default Gif;