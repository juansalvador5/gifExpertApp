import React from 'react';
import PropTypes from 'prop-types'
import {Image} from './GifStyle';

const Gif = ({image, title}) => {
    return(
        <>
            <Image src={image} alt={title} />
        </>
    )
}

Gif.propTypes = {
    image: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
}

export default Gif;