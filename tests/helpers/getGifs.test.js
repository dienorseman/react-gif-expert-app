const { getGifs } = require("../../src/helpers/getGifs")

describe('test on helper getGifs', ()=> {
    test('should return a gif array', async ()=> {
        const gifs = await getGifs('one punch')
        // console.log(gifs);
        expect( gifs.length ).toBeGreaterThan( 0 )
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        })
    }) 
})