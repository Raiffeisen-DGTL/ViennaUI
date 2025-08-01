import React, { useState } from 'react';
import { Story, Meta } from 'storybook';
import { File, FileProps } from './File';
import { FCCFile } from './File';
import { Button } from '../Button';

export default {
    title: 'Development/File',
    component: File,
} as Meta;

export const Overview: Story<FileProps> = () => {
    const [files, setFiles] = React.useState<FCCFile[]>([
        {
            url: '1',
            date: new Date('01.01.2023').toISOString(),
            size: 2048,
            name: 'file 1.jpeg',
        },
        {
            url: '2',
            date: new Date('01.01.2023').toISOString(),
            size: 500,
            name: 'file 2.zip',
        },
    ]);
    const [sending, setSending] = React.useState<boolean>(false);

    const confirmDeleteHandler = React.useCallback(
        async (file) => {
            setSending(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSending(false);
            return true;
        },
        [files]
    );
    const deleteHandler = (file) => {
        setFiles(files.filter((f) => f !== file));
    };

    return (
        <>
            {files.map((f) => (
                <File
                    key={f.url}
                    file={f}
                    disabled={sending}
                    invalid={true}
                    description={'Неправильный тип файла'}
                    hideAltTextOnError
                    confirmDelete={confirmDeleteHandler}
                    onDelete={deleteHandler}
                />
            ))}
        </>
    );
};

export const AnimationOverview: Story<FileProps> = () => {
    const [item, setItem] = useState<FileProps | null>({
        file: {
            id: new Date().getMilliseconds().toString(),
            name: 'Анимированный.jpeg',
        },
        animation: true,
    });

    const rerender = () => {
        setItem({
            file: {
                id: new Date().getMilliseconds().toString(),
                name: 'Анимированный.jpeg',
            },
            animation: true,
        });
    };

    const handleDelete = () => {
        setItem(null);
    };

    return (
        <>
            {item !== null && <File key={item.file.id} {...item} onDelete={handleDelete} />}
            <Button onClick={rerender}>{item === null ? 'Render' : 'Rerender'}</Button>
        </>
    );
};

AnimationOverview.storyName = 'Пример анимированного файла';

export const NoAnimationOverview: Story<FileProps> = () => {
    const [item, setItem] = useState<FileProps | null>({
        file: {
            name: 'Неанимированный.jpeg',
        },
        animation: false,
    });

    const rerender = () => {
        setItem({
            file: {
                name: 'Неанимированный.jpeg',
            },
            animation: false,
        });
    };

    const handleDelete = () => {
        setItem(null);
    };

    return (
        <>
            {item !== null && <File {...item} onDelete={handleDelete} />}
            <Button onClick={rerender}>{item === null ? 'Render' : 'Rerender'}</Button>
        </>
    );
};

NoAnimationOverview.storyName = 'Пример неанимированного файла';

export const HoverWithOnClick: Story<FileProps> = () => {
    const [files, setFiles] = React.useState<FCCFile[]>([
        {
            url: '1',
            date: new Date('01.01.2023').toISOString(),
            size: 2048,
            name: 'file 1.jpeg',
        },
    ]);

    return (
        <>
            {files.map((f) => (
                <File key={f.url} file={f} invalid={true} hideAltTextOnError onClick={(f) => console.log(f)} />
            ))}
        </>
    );
};

export const WithoutInfoAboutDate: Story<FileProps> = () => {
    const [files, setFiles] = React.useState<FCCFile[]>([
        {
            url: '1',
            size: 2048,
            name: 'file 1.jpeg',
        },
    ]);

    return (
        <>
            {files.map((f) => (
                <File key={f.url} file={f} onClick={(f) => console.log(f)} />
            ))}
        </>
    );
};
