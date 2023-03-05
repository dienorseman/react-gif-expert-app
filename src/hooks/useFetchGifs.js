import { useEffect, useState } from "react"

import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( categories ) => {
    const [images, setImages] = useState([ ])
    const [isLoading, setIsLoading] = useState( true )
    const getImages = async () => {
        const newImages = await getGifs( categories )
        setImages( newImages )
        setIsLoading( false )
    }
    
    useEffect(() => {
      
        getImages()
    
        return () => {
            
        }

    }, [])

    return (
        {
            images,
            isLoading,
        }
    )
}
