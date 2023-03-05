import { GifListItem } from "./GifListItem"
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({ categories }) => {

    const { images, isLoading } = useFetchGifs( categories )
    console.log(images, isLoading);

    return (
        <>
            <h3>{ categories }</h3>
            {
                isLoading && (<h2>Loading...</h2>)

            }
            <ol className="card-grid">
                {
                    images.map( ( {id, title, url} ) => (
                        <GifListItem key={id} title={title} url={url}/>
                    ))
                }
            </ol>
        </>
    )
}
