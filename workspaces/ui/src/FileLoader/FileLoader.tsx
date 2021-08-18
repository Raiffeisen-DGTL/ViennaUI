import React, { useCallback, useState, RefAttributes, ForwardRefExoticComponent } from 'react';
import { Box, List, Content, SubContent, Wrapper, InputFile } from './FileLoader.styles';
import { File, Props as FileProps, FCCFile } from './File';
import { getFileExtension } from '../Utils';

export interface FCCFileError {
    file: FCCFile;
    errors: { accept: boolean; maxSizeByte: boolean };
}

export interface FileLoaderProps {
    id?: string;
    name?: string;
    /** Первая строка поля или любой контент */
    content?: React.ReactNode;
    /** Вторая строка поля */
    subContent?: React.ReactNode;
    /** Поддержка множественного выбора файлов */
    multiple?: boolean;
    /** Перечесление через запятую поддерживаемых форматов и/или MIME типов */
    accept?: string;
    disabled?: boolean;
    /** Список файлов (передавать только компоненты типа File) */
    children?: React.ReactNode;
    /** Максимальный размер каждого файла в байтах */
    maxSizeByte?: number;
    /** Состояние ошибки */
    invalid?: boolean;
    /** Событие onChange */
    ref?: React.Ref<HTMLInputElement>;
    onChange?: (event, files: FCCFile[], errorFiles: FCCFileError[]) => void;
}

export const buildFileList = (files, accept, maxSizeByte) => {
    // подготавливаем измененный интерфейс файлов
    const fccFiles = Array.from<FCCFile>(files).map((file) => {
        file.url = URL.createObjectURL(file);
        file.progress = 0;
        file.date = new Date().toISOString();
        return file;
    });

    // файлы с ошибками
    const errorFiles: FCCFileError[] = [];

    const correctFiles = fccFiles.filter((file) => {
        // фильтруем по расширению и MIME
        const accepts = accept?.split(',') ?? [];
        const correctAccept =
            !accept ||
            accepts.some(
                (ac: string) =>
                    ac.trim() === file.type ||
                    getFileExtension(file).toLowerCase() === ac.trim().replace('.', '').toLowerCase()
            );

        // фильтруем по размеру
        const correctMaxSizeByte = (file.size ?? 0) <= maxSizeByte;

        const correct = correctAccept && correctMaxSizeByte;
        if (!correct) {
            errorFiles.push({
                file,
                errors: {
                    accept: !correctAccept,
                    maxSizeByte: !correctMaxSizeByte,
                },
            });
        }

        return correct;
    });

    return { correctFiles, errorFiles };
};

const buildChildren = (children) =>
    React.Children.toArray(children).map((c: any) => React.cloneElement(c, { key: c.props.file.url }));

export const FileLoader: React.FC<FileLoaderProps> & { File: React.FC<FileProps> } = React.forwardRef(
    (props: FileLoaderProps, ref: React.Ref<HTMLInputElement>) => {
        const {
            onChange,
            children,
            content,
            subContent,
            disabled,
            maxSizeByte = Infinity,
            invalid,
            accept = '',
            ...attrs
        } = props;
        const [over, setOver] = useState(false);

        const changeHandler = useCallback(
            (e) => {
                e.preventDefault();
                if (typeof onChange === 'function') {
                    const { correctFiles, errorFiles } = buildFileList(e.target.files, accept, maxSizeByte);
                    onChange(e, correctFiles, errorFiles);
                }
            },
            [onChange, accept, maxSizeByte]
        );

        const onDragEnterHandler = useCallback(() => {
            setOver(true);
        }, []);

        const onDropHandler = useCallback(
            (e) => {
                e.preventDefault();
                if (typeof onChange === 'function' && !disabled) {
                    const { correctFiles, errorFiles } = buildFileList(e.dataTransfer.files, accept, maxSizeByte);
                    onChange(e, correctFiles, errorFiles);
                }
                setOver(false);
            },
            [disabled, accept, maxSizeByte, onChange]
        );

        const onDragOver = useCallback(
            (e) => {
                e.preventDefault();
                if (!disabled) {
                    setOver(true);
                }
            },
            [disabled]
        );

        const onDragLeaveHandler = useCallback(() => {
            if (!disabled) {
                setOver(false);
            }
        }, [disabled]);

        return (
            <Wrapper>
                <Box
                    over={over}
                    invalid={invalid}
                    disabled={disabled}
                    onDrop={onDropHandler}
                    onDragEnter={onDragEnterHandler}
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeaveHandler}>
                    {content && <Content>{content}</Content>}
                    {subContent && <SubContent>{subContent}</SubContent>}
                    <InputFile
                        ref={ref}
                        type='file'
                        accept={accept}
                        value={'' as any}
                        disabled={disabled}
                        onChange={changeHandler}
                        {...attrs}
                    />
                </Box>
                {children && Boolean(React.Children.count(children)) && <List>{buildChildren(children)}</List>}
            </Wrapper>
        );
    }
) as ForwardRefExoticComponent<FileLoaderProps & RefAttributes<HTMLInputElement>> & { File: React.FC<FileProps> };

FileLoader.displayName = 'FileLoader';
FileLoader.defaultProps = {
    multiple: true,
};
FileLoader.File = File;

export default FileLoader;
