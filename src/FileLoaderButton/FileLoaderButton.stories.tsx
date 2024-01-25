import React from 'react';
import { Story, Meta } from 'storybook';
import { Download } from '@fcc/icons';
import { FileLoaderButton, FileLoaderButtonProps } from './FileLoaderButton';
import { Groups } from '../Groups';
import { Link } from '../Link';
import { FCCFile } from '../FileLoader';

export default {
    title: 'Development/FileLoaderButton',
    component: FileLoaderButton,
} as Meta;

export const Overview: Story<FileLoaderButtonProps> = (args) => {
    const [files, setFiles] = React.useState<FCCFile[]>([]);
    const changeHandler = React.useCallback(
        (e, newFiles) => {
            setFiles(newFiles);
        },
        [files]
    );
    return (
        <Groups>
            <FileLoaderButton {...args} accept='xls,xlsx' onChange={changeHandler}>
                <Download /> Загрузить файл
            </FileLoaderButton>
            {files[0] && (
                <Groups>
                    {files[0].name}
                    <Link design='accent' onClick={() => setFiles([])}>
                        Отменить
                    </Link>
                </Groups>
            )}
        </Groups>
    );
};

export const MultipleFiles: Story<FileLoaderButtonProps> = (args) => {
    const [files, setFiles] = React.useState([]);
    const changeHandler = React.useCallback(
        (e, newFiles) => {
            setFiles(newFiles);
        },
        [files]
    );
    return (
        <Groups>
            <FileLoaderButton multiple onChange={changeHandler} {...args}>
                <Download /> Загрузить файл
            </FileLoaderButton>
            {!!files.length && (
                <Groups>
                    Загружено файлов: {files.length}
                    <Link design='accent' onClick={() => setFiles([])}>
                        Отменить
                    </Link>
                </Groups>
            )}
        </Groups>
    );
};
MultipleFiles.storyName = 'Множественный выбор файлов';

export const Playwright: Story<FileLoaderButtonProps> = (args) => {
    const [files, setFiles] = React.useState<FCCFile[]>([{ date: new Date('01.01.2023').toISOString() }]);
    const changeHandler = React.useCallback(
        (e, newFiles) => {
            setFiles(newFiles);
        },
        [files]
    );
    return (
        <Groups>
            <FileLoaderButton disabled {...args} accept='xls,xlsx' onChange={changeHandler}>
                <Download /> Загрузить файл
            </FileLoaderButton>
            <FileLoaderButton loading {...args} accept='xls,xlsx' onChange={changeHandler}>
                <Download /> Загрузить файл
            </FileLoaderButton>
            {files[0] && (
                <Groups>
                    {files[0].name}
                    <Link design='accent' onClick={() => setFiles([])}>
                        Отменить
                    </Link>
                </Groups>
            )}
        </Groups>
    );
};
