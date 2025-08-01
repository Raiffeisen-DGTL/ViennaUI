import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from '../Tooltip';

describe('Tooltip', () => {
    xit('w/ hover on button', () => {
        const message = 'tooltip';
        render(
            <Tooltip<HTMLButtonElement> content={message} placement='top'>
                {(ref) => <button ref={ref}>Hover me</button>}
            </Tooltip>
        );
        const button = screen.getByText('Hover me');
        userEvent.hover(button);
        const tooltip = screen.getByText(message);
        expect(tooltip).toBeInTheDocument();

        userEvent.unhover(button);
        expect(tooltip).not.toBeInTheDocument();
    });

    test('w/ hover on button w/ disabled', () => {
        const message = 'tooltip';
        render(
            <Tooltip<HTMLButtonElement> disabled content={message} placement='top'>
                {(ref) => <button ref={ref}>Hover me</button>}
            </Tooltip>
        );
        const button = screen.getByText('Hover me');
        userEvent.hover(button);
        expect(screen.queryByText(/tooltip/i)).toBeNull();
    });

    xit('w/ hover on text', () => {
        const message = 'tooltip';
        render(
            <Tooltip content={message} placement='top'>
                Hover me
            </Tooltip>
        );
        const button = screen.getByText('Hover me');
        userEvent.hover(button);
        const tooltip = screen.getByText(message);
        expect(tooltip).toBeInTheDocument();

        userEvent.unhover(button);
        expect(tooltip).not.toBeInTheDocument();
    });

    xit('w/ inner interaction content', () => {
        const fn = jest.fn();
        const content = <button onClick={fn}>Click</button>;
        render(
            <Tooltip aria-label='tooltip' content={content} placement='top'>
                Hover me
            </Tooltip>
        );
        const text = screen.getByText('Hover me');
        userEvent.hover(text);

        const tooltip = screen.getByLabelText(/tooltip/i);
        expect(tooltip).toBeInTheDocument();

        const button = screen.getByText('Click');
        userEvent.click(button);
        expect(fn).toHaveBeenCalled();
    });
});
