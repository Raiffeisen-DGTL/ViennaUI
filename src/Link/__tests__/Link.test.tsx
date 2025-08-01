import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link } from '../Link';

describe('Link', () => {
    it('should has a url', () => {
        render(<Link href='https://ds.raiffeisen.ru/'>Нажми на меня</Link>);
        const link = screen.getByRole('link');
        expect(link).toHaveAttribute('href', 'https://ds.raiffeisen.ru/');
    });

    it('should call onClick when click', async () => {
        const fn = jest.fn();
        render(
            <Link href='#' onClick={fn}>
                Test Link
            </Link>
        );
        const link = screen.getByRole('link');
        await userEvent.click(link);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onMouseDown when click', async () => {
        const fn = jest.fn();
        render(
            <Link href='#' onMouseDown={fn}>
                Test Link
            </Link>
        );
        const link = screen.getByRole('link');
        await userEvent.click(link);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onMouseUp when click', async () => {
        const fn = jest.fn();
        render(
            <Link href='#' onMouseUp={fn}>
                Test Link
            </Link>
        );
        const link = screen.getByRole('link');
        await userEvent.click(link);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onFocus when focus', async () => {
        const fn = jest.fn();
        render(
            <Link tabIndex={1} href='#' onFocus={fn}>
                Test Link
            </Link>
        );
        await userEvent.tab();
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onBlur when blur', async () => {
        const fn = jest.fn();
        render(
            <Link tabIndex={0} href='#' onBlur={fn}>
                Test Link
            </Link>
        );
        await userEvent.tab();
        await userEvent.tab();
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });
});
