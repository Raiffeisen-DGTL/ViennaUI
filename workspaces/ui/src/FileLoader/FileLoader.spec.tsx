import React from 'react';
import { FileLoader } from './index';
import { CloseIcon, Name } from './File/File.styles';
import { Link } from '..';

it('FileLoader /w content', () => {
    const fileloader = snapshot.render(<FileLoader content={'Перетащите файлы'} />);

    expect(fileloader).toMatchSnapshot();
});

it('FileLoader /w content as ReactNode', () => {
    const content = (
        <>
            Перетащите файлы сюда или{'\u00A0'}
            <Link design='accent'>загрузите документы</Link>
        </>
    );
    const fileloader = snapshot.render(<FileLoader content={content} />);

    expect(fileloader).toMatchSnapshot();
});

it('FileLoader /w content and subcontent', () => {
    const fileloader = snapshot.render(
        <FileLoader content={'Перетащите файлы'} subContent={'JPG, GIF, PNG, PDF или ZIP, до 150kb'} />
    );

    expect(fileloader).toMatchSnapshot();
});

it('FileLoader /w with files', () => {
    const fileloader = snapshot.render(
        <FileLoader content={'Перетащите файлы'}>
            <FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} />
            <FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} />
            <FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} />
        </FileLoader>
    );

    expect(fileloader).toMatchSnapshot();
});

it('FileLoader /w file', () => {
    const file = snapshot.render(<FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} />);

    expect(file).toMatchSnapshot();
});

it('FileLoader /w file progress', () => {
    const file = snapshot.render(
        <FileLoader.File progress={50} loading file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} />
    );

    expect(file).toMatchSnapshot();
});

it('FileLoader /w file closable = false', () => {
    const file = snapshot.render(
        <FileLoader.File closable={false} file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} />
    );

    expect(file).toMatchSnapshot();
});

it('FileLoader /w file onDelete()', () => {
    const file = snapshot.shallow(<FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} />);

    file.find(CloseIcon).simulate('click');

    expect(file.props().toggle).toEqual(false);
});

it('FileLoader /w file onClick()', () => {
    const fn = jest.fn();
    const file = snapshot.mount(
        <FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} onClick={fn} />
    );
    file.find(Name).simulate('click');

    expect(fn).toBeCalled();
});

it('FileLoader /w file onDelete() keyboard', () => {
    const file = snapshot.shallow(<FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} />);

    file.find(Name).simulate('keydown', { key: 'Delete' });

    expect(file.props().toggle).toEqual(false);
});

it('FileLoader /w file onClick() keyboard', () => {
    const fn = jest.fn();
    const file = snapshot.mount(
        <FileLoader.File file={{ url: '1', date: '', size: 2048, name: 'file 1.doc' }} onClick={fn} />
    );
    file.find(Name).simulate('keydown', { key: 'Enter' });

    expect(fn).toBeCalled();
});
