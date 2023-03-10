const { renderHook, waitFor } = require("@testing-library/react")
const { useFetchGifs } = require("../../src/hooks/useFetchGifs")

describe('Testing useFetchGifs testing', () => {
    test('debe de regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('death note'))
        const { images, isLoading } = result.current

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy()
    })

    test('should return a new state with images and a false state', async () => {
        const { result } = renderHook( () => useFetchGifs( 'deathWing' ) )

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),  
        )

        const { images, isLoading } = result.current

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).not.toBeTruthy()
    })
})