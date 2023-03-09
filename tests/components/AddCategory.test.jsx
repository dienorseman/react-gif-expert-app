import { AddCategory } from "../../src/components"
import { fireEvent, render, screen } from "@testing-library/react";

describe('Test on add category', () => {
    test('Should return a new category', () => {
        const onNewCategory = () => {
            console.log( 'add new category' );
        }
        render( <AddCategory onNewCategory={ onNewCategory }/> )
        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: { value: 'Saitama' } })
        expect( input.value ).toBe( 'Saitama' )
        screen.debug()
    } )
} )