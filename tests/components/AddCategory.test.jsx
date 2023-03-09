import { AddCategory } from "../../src/components"
import { fireEvent, render, screen } from "@testing-library/react";

describe('Test on add category', () => {        

    test('Should return a new category', () => {

        render( <AddCategory onNewCategory={ () => {} }/> )
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Saitama' } })
        expect( input.value ).toBe( 'Saitama' )
    } )

    test('should call onNewCategory if the input has a value', () => {
        const inputValue = 'Linux'
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory }/> )
        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' )

        fireEvent.input( input, { target: { value: inputValue } } )
        // screen.debug()
        fireEvent.submit( form )
        // screen.debug()
        expect( input.value ).toBe( '' )

        expect( onNewCategory ).toHaveBeenCalledTimes( 1 )
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )
    })

    test('should not call onNewCategory if input is empty', () => { 

        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={ onNewCategory } />)

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' )

        fireEvent.input( input, { target: { value: '' } } )
        fireEvent.submit( form )

        expect( onNewCategory ).toHaveBeenCalledTimes( 0 )

     })
})