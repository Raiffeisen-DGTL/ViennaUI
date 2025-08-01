import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Switcher } from '../Switcher';

describe('Switcher', () => {
    xit('should call onBlur when blur', () => {
        const fn = jest.fn();
        render(
            <Switcher name='switcher' checked onBlur={fn}>
                Label
            </Switcher>
        );
        userEvent.tab();
        userEvent.tab();
        expect(fn).toHaveBeenCalled();
    });

    xit('should call onFocus when focus', () => {
        const fn = jest.fn();
        render(
            <Switcher name='switcher' onFocus={fn}>
                Label
            </Switcher>
        );
        userEvent.tab();
        expect(fn).toHaveBeenCalled();
    });

    xit('should call onChange when change', () => {
        const fn = jest.fn();
        const event = { currentTarget: { checked: true } };

        render(
            <Switcher name='switcher' onChange={fn}>
                Label
            </Switcher>
        );
        const switcher = screen.getByRole('checkbox');
        userEvent.click(switcher);
        expect(fn).toHaveBeenCalled();
        expect(fn).not.toHaveBeenCalledWith(event, { name: 'switcher', value: true });
    });

    test('should not call onChange when disabled', () => {
        const fn = jest.fn();
        const event = { currentTarget: { checked: true } };

        render(
            <Switcher name='switcher' disabled onChange={fn}>
                Label
            </Switcher>
        );

        const switcher = screen.getByRole('checkbox');
        userEvent.click(switcher);
        expect(fn).not.toHaveBeenCalled();
        expect(fn).not.toHaveBeenCalledWith(event, { name: 'switcher', value: true });
    });
});
