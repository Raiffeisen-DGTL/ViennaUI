import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '../Input';

describe('Input', () => {
    test('w/ typing', () => {
        render(<Input />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Text' } });
        expect(input).toHaveValue('Text');
    });

    test('w/ tab', async () => {
        render(<Input />);
        const input = screen.getByRole('textbox');
        await userEvent.tab();
        await userEvent.keyboard('Text');
        expect(input).toHaveValue('Text');
    });

    test('w/ tab w/ two inputs', async () => {
        render(<Input />);
        render(<Input />);
        const [input] = screen.getAllByRole('textbox');
        await userEvent.tab();
        await userEvent.tab();
        await userEvent.keyboard('Text');
        expect(input).toHaveValue('');
    });

    test('w/ inverse tab w/ two inputs', async () => {
        render(<Input tabIndex={2} />);
        render(<Input tabIndex={1} />);
        const [input] = screen.getAllByRole('textbox');
        await userEvent.tab();
        await userEvent.tab();
        await userEvent.keyboard('Text');
        expect(input).toHaveValue('Text');
    });

    test('w/ onFocus()', async () => {
        const fn = jest.fn();
        render(<Input onFocus={fn} value='test' />);
        await userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'test' });
    });

    test('w/ onBlur()', async () => {
        const fn = jest.fn();
        render(<Input onBlur={fn} value='test' />);
        await userEvent.tab();
        await userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'test', name: undefined });
    });

    test('w/ onChange()', () => {
        const fn = jest.fn();
        render(<Input onChange={fn} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Text' } });

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith({ event: expect.any(Object), value: 'Text', options: { name: undefined } });
    });
});
