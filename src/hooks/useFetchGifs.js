import { useState } from "react"

import {getGift} from '../services/gifsServices';

export const useFetchGifs = (categories) => {
    const [state, setState] = useState({
        data:[],
        loading: true,
    })

    getGift(categories)
        .then(data => {
            setState({
                data: data,
                loading: false,
            });
        });


    return state;
}