import React from 'react';
import GifGrid from './components/GifGrid';
import {GlobalStyle} from './Global/GlobalStyle'

const App = () => {
    return(
        <>
            <GlobalStyle/>
            <GifGrid />
        </>
    );
};

export default App;