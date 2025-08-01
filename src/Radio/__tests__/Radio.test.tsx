import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from '../Radio';

describe('Radio', () => {
    xit('should call onBlur() when blur', () => {
        const fn = jest.fn();
        render(
            <Radio name='radio' value='x' tabIndex={1} onBlur={fn}>
                Label
            </Radio>
        );

        userEvent.tab();
        userEvent.tab();
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { name: 'radio', value: 'x' });
    });

    xit('should call onFocus() when focus', () => {
        const fn = jest.fn();

        render(
            <Radio name='radio' value='x' tabIndex={1} onFocus={fn}>
                Label
            </Radio>
        );

        userEvent.tab();
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { name: 'radio', value: 'x' });
    });

    xit('should call onChange() when click', () => {
        const fn = jest.fn();

        render(
            <Radio name='radio' value='x' tabIndex={1} onChange={fn}>
                Label
            </Radio>
        );

        const radio = screen.getByRole('radio');
        userEvent.click(radio);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { name: 'radio', value: 'x' });
    });

    it('should not call onChange() when disabled', () => {
        const fn = jest.fn();

        render(
            <Radio name='radio' value='x' tabIndex={1} disabled onChange={fn}>
                Label
            </Radio>
        );

        const radio = screen.getByRole('radio');
        expect(radio).toHaveAttribute('disabled');
        userEvent.click(radio);
        expect(fn).not.toHaveBeenCalled();
    });
});
