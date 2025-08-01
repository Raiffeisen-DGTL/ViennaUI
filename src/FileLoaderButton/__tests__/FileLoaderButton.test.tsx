import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileLoaderButton } from '../FileLoaderButton';

describe('FileLoaderButton', () => {
    it('should upload files', async () => {
        const glob: any = global;
        glob.URL.createObjectURL = jest.fn();
        const fn = jest.fn();
        const file = new File(['hello'], 'hello.png', { type: 'image/png' });
        render(<FileLoaderButton onChange={fn}>Upload files</FileLoaderButton>);

        const input: any = screen.getByDisplayValue('');
        await waitFor(() =>
            fireEvent.change(input, {
                target: { files: [file] },
            })
        );
        expect(input.files[0]).toStrictEqual(file);
        expect(input.files).toHaveLength(1);
    });

    it('should call onFocus when focus', async () => {
        const fn = jest.fn();
        render(<FileLoaderButton onFocus={fn}>Test button</FileLoaderButton>);
        await userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onBlur when blur', async () => {
        const fn = jest.fn();
        render(<FileLoaderButton onBlur={fn}>Test button</FileLoaderButton>);
        await userEvent.tab();
        await userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onClick when click', async () => {
        const fn = jest.fn();
        render(<FileLoaderButton onClick={fn}>Test button</FileLoaderButton>);
        const button = screen.getByRole('button');
        await userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onMouseDown when mouse down', async () => {
        const fn = jest.fn();
        render(<FileLoaderButton onMouseDown={fn}>Test button</FileLoaderButton>);
        const button = screen.getByRole('button');
        await userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call onMouseUp when mouse up', async () => {
        const fn = jest.fn();
        render(<FileLoaderButton onMouseUp={fn}>Test button</FileLoaderButton>);
        const button = screen.getByRole('button');
        await userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });
});
