import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
    xit('should call onChange when click', () => {
        const fn = jest.fn();
        render(
            <Checkbox name='checkbox' onChange={fn}>
                Label
            </Checkbox>
        );
        const checkbox = screen.getByRole('checkbox');
        userEvent.click(checkbox);
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: true, name: 'checkbox' });
    });

    it('should not call onChange when click on disabled checkbox', () => {
        const fn = jest.fn();
        render(
            <Checkbox name='checkbox' onChange={fn} disabled>
                Label
            </Checkbox>
        );
        const checkbox = screen.getByRole('checkbox');
        userEvent.click(checkbox);
        expect(fn).not.toHaveBeenCalled();
    });

    xit('should call onFocus when focus', () => {
        const fn = jest.fn();
        render(
            <Checkbox name='checkbox' onFocus={fn}>
                Label
            </Checkbox>
        );
        userEvent.tab();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: false, name: 'checkbox' });
    });

    xit('should call onBlur when blur', () => {
        const fn = jest.fn();
        render(
            <Checkbox name='checkbox' onBlur={fn}>
                Label
            </Checkbox>
        );
        userEvent.tab();
        userEvent.tab();
        expect(fn).toHaveBeenCalledWith(expect.any(Object), { value: false, name: 'checkbox' });
    });
});
