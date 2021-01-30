export const getGift = async(category) => {
    const API_KEY = 'WRQ4G53O8E5HBPVgrsWpBJEBJPp7t7u7'
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=40`
    
    const response = await fetch(URL)
    const {data} = await response.json();

    return data;
} 