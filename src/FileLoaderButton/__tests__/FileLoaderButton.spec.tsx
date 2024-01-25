import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileLoaderButton } from '../FileLoaderButton';

describe('Fileloader', () => {
    xit('should upload files', async () => {
        const glob: any = global;
        glob.URL.createObjectURL = jest.fn();
        const fn = jest.fn();
        const file = new File(['hello'], 'hello.png', { type: 'image/png' });
        render(<FileLoaderButton onChange={fn}>Upload files</FileLoaderButton>);

        const input: any = screen.getByDisplayValue('');
        userEvent.upload(input, file);
        await waitFor(() => expect(fn).toHaveBeenCalled());
        expect(input.files[0]).toStrictEqual(file);
        expect(input.files.item(0)).toStrictEqual(file);
        expect(input.files).toHaveLength(1);
    });

    xit('should call onFocus when focus', () => {
        const fn = jest.fn();
        render(<FileLoaderButton onFocus={fn}>Test button</FileLoaderButton>);
        userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    xit('should call onBlur when blur', () => {
        const fn = jest.fn();
        render(<FileLoaderButton onBlur={fn}>Test button</FileLoaderButton>);
        userEvent.tab();
        userEvent.tab();

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    xit('should call onClick when click', () => {
        const fn = jest.fn();
        render(<FileLoaderButton onClick={fn}>Test button</FileLoaderButton>);
        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    xit('should call onMouseDown when mouse down', () => {
        const fn = jest.fn();
        render(<FileLoaderButton onMouseDown={fn}>Test button</FileLoaderButton>);
        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    xit('should call onMouseUp when mouse up', () => {
        const fn = jest.fn();
        render(<FileLoaderButton onMouseUp={fn}>Test button</FileLoaderButton>);
        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });
});
