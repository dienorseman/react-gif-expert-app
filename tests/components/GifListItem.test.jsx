const { render, screen } = require("@testing-library/react");
const { GifListItem } = require("../../src/components");

describe("Test in gifListItem component", () => {

    const title = 'Deathwing';
    const url = 'http://ueusjsjsjsjss.com/'

    test("should match the snapshot", () => {
        const { container } = render( <GifListItem  title={ title } url={ url }/> )
        expect( container ).toMatchSnapshot
    });
    
    test('should show the img with the url and the alt', () => { 
        render( <GifListItem title={ title } url={ url } />)
        // screen.debug()
        const { src, alt } = screen.getByRole( 'img' )
        expect( src ).toBe( url )
        expect( alt ).toBe( title )
     })
     
     test('should return the title a a text', () => { 
        render( <GifListItem title={ title } url={ url } />)
        expect( screen.getByText( title ) ).toBeTruthy()
      })
});