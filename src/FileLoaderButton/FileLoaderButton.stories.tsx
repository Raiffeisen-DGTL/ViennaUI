import React from 'react';
import { Story, Meta } from 'storybook';
import { DownloadIcon as Download } from 'vienna.icons';
import { FileLoaderButton, FileLoaderButtonProps } from './FileLoaderButton';
import { Groups } from '../Groups';
import { Link } from '../Link';
import { FCCFile } from '../File';

export default {
    title: 'Development/FileLoaderButton',
    component: FileLoaderButton,
} as Meta;

export const Overview: Story<FileLoaderButtonProps> = (args) => {
    const [files, setFiles] = React.useState<File[]>([]);
    const changeHandler = React.useCallback(
        ({ value: newFiles }) => {
            setFiles([...files, ...newFiles]);
        },
        [files]
    );
    return (
        <Groups>
            <FileLoaderButton onChange={changeHandler} {...args}>
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
    const [files, setFiles] = React.useState<File[]>([]);
    const changeHandler = React.useCallback(
        ({ value: newFiles }) => {
            setFiles([...files, ...newFiles]);
        },
        [files]
    );
    return (
        <Groups>
            <FileLoaderButton files={files} multiple onChange={changeHandler} maxFiles={3} {...args}>
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
        ({ value: newFiles }) => {
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
