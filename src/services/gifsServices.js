
export const getGift = ( {category} ) => {
    const API_KEY = 'WRQ4G53O8E5HBPVgrsWpBJEBJPp7t7u7'
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`
    
    return fetch(URL)
        .then(response => response.json())


} 