const { render, screen, waitFor } = require("@testing-library/react")
const { GiffExpertApp } = require("../src/GiffExpertApp")

describe('Test on <GifExpertApp />', () => {
    test('should match the snapshot', () => {
        const { container } = render( <GiffExpertApp /> );
        expect( container ).toMatchSnapshot();
        // screen.debug();
    })
    test('should change state', async () => {
        render( <GiffExpertApp />)
        const loadStatus = screen.getByText( 'Loading...' )
        expect( loadStatus ).toBeTruthy()
        console.log(loadStatus );
        await waitFor(
            () => expect( loadStatus ).toBeFalsy()
        )
        screen.debug()
    })
})