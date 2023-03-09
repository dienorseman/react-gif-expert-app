import axios from 'axios'

export const getGifs = async ( categories ) => {
    const api_key = 'tngM89Coviwv4pbLukfjBICe5LIHKCa'
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${ api_key }a&q=${ categories }&limit=5`
    const resp = await axios.get( url )
    const { data } = resp.data
    // console.log( data );

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    // console.log(gifs);
    return gifs
}
