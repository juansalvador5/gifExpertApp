import React from 'react';
import Gif from './Gif';
import styled from 'styled-components';

const Gifs = ({gifs}) => {

const Gifs = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items:center;
` 

    return(
        <>
            <Gifs>
            {
                gifs.map(gif => 
                        <Gif 
                            key={gif.id}
                            title={gif.title}
                            image={gif.images?.downsized_large.url}
                        />
                    ) 
            }
            </Gifs>
        </>
    )
}

export default Gifs;