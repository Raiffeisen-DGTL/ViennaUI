import React from 'react';
import { waitFor, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileLoader } from '../index';

describe.skip('FileLoader', () => {
    it('should call file onClick() when click', () => {
        const fn = jest.fn();
        render(<FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} onClick={fn} />);
        const file = screen.getByText(/file/i);
        userEvent.click(file);
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });

    it('should call file onDelete() from the keyboard', async () => {
        const fn = jest.fn();
        render(<FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} onDelete={fn} />);
        userEvent.tab();
        userEvent.keyboard('[Delete]');
        await waitFor(() => expect(fn).toHaveBeenCalled());
        await waitFor(() => expect(fn).toHaveBeenCalledWith(expect.any(Object)));
    });

    it('should call file onClick() from the keyboard', () => {
        const fn = jest.fn();
        render(<FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} onClick={fn} />);
        userEvent.tab();
        userEvent.keyboard('[Enter]');
        expect(fn).toHaveBeenCalled();
        expect(fn).toHaveBeenCalledWith(expect.any(Object));
    });
    it('should call file onDelete() when click on the cross', async () => {
        const fn = jest.fn();
        render(<FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} onDelete={fn} />);
        const cross = screen.getByTestId('File.CloseIcon');
        expect(screen.getByText(/file/i)).toBeInTheDocument();

        userEvent.click(cross);
        await waitFor(() => expect(fn).toHaveBeenCalled());
        await waitFor(() => expect(fn).toHaveBeenCalledWith(expect.any(Object)));
    });

    it('should display content and subcontent', () => {
        const content = 'Drag and drop here';
        const subContent = 'JPG, GIF, PNG, PDF или ZIP, до 150kb';
        render(
            <FileLoader content={content} subContent={subContent}>
                <FileLoader.File file={{ url: '1', date: '', size: 2048, name: '' }} />
            </FileLoader>
        );
        expect(screen.getByText(content)).toBeTruthy();
        expect(screen.getByText(subContent)).toBeTruthy();
    });

    xit('should works when drag and ', async () => {
        const glob: any = global;
        glob.URL.createObjectURL = jest.fn();
        const fn = jest.fn();
        const content = 'Drag and drop here';
        const files = [
            new File(['hello'], 'hello.png', { type: 'image/png' }),
            new File(['there'], 'there.png', { type: 'image/png' }),
        ];
        render(
            <FileLoader content={content} onChange={fn}>
                <FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'test-file.jpg' }} />
            </FileLoader>
        );

        const input: any = screen.getByDisplayValue('');
        userEvent.upload(input, files);
        await waitFor(() => expect(fn).toHaveBeenCalled());
        expect(input.files).toHaveLength(2);
        expect(input.files[0]).toStrictEqual(files[0]);
        expect(input.files[1]).toStrictEqual(files[1]);
    });
});
