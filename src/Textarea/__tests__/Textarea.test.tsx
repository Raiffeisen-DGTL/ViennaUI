import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from '../Textarea';

describe('Textarea', () => {
    it('should test the typing', async () => {
        render(<Textarea />);
        const input = screen.getByRole('textbox');

        await userEvent.type(input, 'Text');
        expect(input).toHaveValue('Text');
    });

    it('should test the counter', async () => {
        render(<Textarea showCounter testId={{ counter: 'Textarea.Counter' }} />);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'Text');
        const span = screen.getByTestId('Textarea.Counter');

        expect(input).toHaveValue('Text');
        expect(span).toHaveTextContent('4');
    });

    it('should test the focus by tab', async () => {
        render(<Textarea />);
        const input = screen.getByRole('textbox');
        await userEvent.tab();
        await userEvent.keyboard('Text');
        expect(input).toHaveValue('Text');
    });

    it('should test the focus by tab for two inputs', async () => {
        render(<Textarea />);
        render(<Textarea />);
        const [input] = screen.getAllByRole('textbox');
        await userEvent.tab();
        await userEvent.tab();
        await userEvent.keyboard('Text');
        expect(input).toHaveValue('');
    });

    it('should test the inverse tab for two inputs', async () => {
        render(<Textarea tabIndex={2} />);
        render(<Textarea tabIndex={1} />);
        const [input] = screen.getAllByRole('textbox');
        await userEvent.tab();
        await userEvent.tab();
        await userEvent.keyboard('Text');
        expect(input).toHaveValue('Text');
    });

    it('should call onFocus when focus', async () => {
        const fn = jest.fn();
        render(<Textarea value='test' onFocus={fn} />);
        await userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'test', name: undefined });
    });

    it('should call onBlur when blur', async () => {
        const fn = jest.fn();
        render(<Textarea value='test' onBlur={fn} />);
        await userEvent.tab();
        await userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: 'test', name: undefined });
    });

    it('should call onChange when type', async () => {
        const fn = jest.fn();
        render(<Textarea onChange={fn} />);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'Text');

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith({ event: expect.any(Object), value: 'Text', options: { name: undefined } });
    });

    it('should not call onChange when disabled', async () => {
        const fn = jest.fn();

        render(<Textarea disabled onChange={fn} />);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'Text');
        expect(fn).not.toHaveBeenCalled();
    });

    it('should call onKeyDown when type', async () => {
        const fn = jest.fn();
        render(<Textarea onKeyDown={fn} />);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'Text');
        expect(input).toHaveValue('Text');
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(4);
    });
    it('should call onKeyUp when type', async () => {
        const fn = jest.fn();
        render(<Textarea onKeyUp={fn} />);
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'Text');
        expect(input).toHaveValue('Text');
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledTimes(4);
    });
});
