import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/componets/AddCategory";

describe('Test in <AddCategory />', () => {

    const inputValue = 'Attack on Titan';

    test('should to change input text', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue} });

        expect(input.value).toBe(inputValue);
    });

    test('should to call onNewCategory if the input has a value', () => { 
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={ onNewCategory } />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue} });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })

    test('shouldnt call onNewCategory if input is empty', () => { 
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: ''} });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});