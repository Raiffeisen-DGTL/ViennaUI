import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';

describe('Button', () => {
    it('should call onFocus when focus', async () => {
        const fn = jest.fn();
        render(<Button onFocus={fn}>Test button</Button>);
        await userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onBlur when blur', async () => {
        const fn = jest.fn();
        render(<Button onBlur={fn}>Test button</Button>);
        await userEvent.tab();
        await userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onClick when click', async () => {
        const fn = jest.fn();
        render(<Button onClick={fn}>Test button</Button>);
        const button = screen.getByRole('button');
        await userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onMouseDown when mouse down', async () => {
        const fn = jest.fn();
        render(<Button onMouseDown={fn}>Test button</Button>);
        const button = screen.getByRole('button');
        await userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onMouseUp when mouse up', async () => {
        const fn = jest.fn();
        render(<Button onMouseUp={fn}>Test button</Button>);
        const button = screen.getByRole('button');
        await userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });
});
