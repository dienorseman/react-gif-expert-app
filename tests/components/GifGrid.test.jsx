import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock( "../../src/hooks/useFetchGifs" )

describe('test on GifGrid component', () => {

    const categories = 'Valorant'

    test('should return a bunch of gifs', () => { 

        useFetchGifs.mockReturnValue( { 
            images: [],
            isLoading: true
         } )
        render( <GifGrid categories={ categories } /> )
        expect( screen.getByText( 'Loading...' ) )
        expect( screen.getByText( categories ) )
     })
     
     test('should show the items when images are loaded useFecthGifs', () => {
        const gifs = [
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/gouke'
            },
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/Saitama'
            }
        ]
        useFetchGifs.mockReturnValue( { 
            images: gifs,
            isLoading: false
         } )
        render( <GifGrid categories={ categories } /> )
        expect( screen.getAllByRole('img').length ).toBe(2)
     })
})