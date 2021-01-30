import React from 'react';
import Gif from '../Gif';
import { GifsContainer } from './GifsStyle'

const Gifs = ({gifs}) => {

    return(
        <>
            <GifsContainer>
            {
                gifs.map(gif => 
                        <Gif 
                            key={gif.id}
                            title={gif.title}
                            image={gif.images?.downsized_large.url}
                        />
                    ) 
            }
            </GifsContainer>
        </>
    )
}

export default Gifs;