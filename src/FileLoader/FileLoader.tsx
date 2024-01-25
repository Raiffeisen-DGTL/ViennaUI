import React, {
    useCallback,
    useState,
    RefAttributes,
    ForwardRefExoticComponent,
    ReactNode,
    cloneElement,
    forwardRef,
} from 'react';
import { Box, List, Content, SubContent, Wrapper, InputFile } from './FileLoader.styles';
import { File, FCCFile } from './File';
import { getFileExtension } from '../Utils';

export interface FCCFileError {
    file: FCCFile;
    errors: { accept: boolean; maxSizeByte: boolean; maxFiles: boolean };
}

export interface FileLoaderProps {
    id?: string;
    name?: string;
    /** Первая строка поля или любой контент */
    content?: ReactNode;
    /** Вторая строка поля */
    subContent?: ReactNode;
    /** Поддержка множественного выбора файлов */
    multiple?: boolean;
    /** Перечесление через запятую поддерживаемых форматов и/или MIME типов */
    accept?: string;
    disabled?: boolean;
    /** Максимальный размер каждого файла в байтах */
    maxSizeByte?: number;
    /** Состояние ошибки */
    invalid?: boolean;
    onChange?: (event, files: FCCFile[], errorFiles: FCCFileError[]) => void;
    /** Ограничение на количество загружаемых файлов */
    maxFiles?: number;
    children?: ReactNode | undefined;
}

export const buildFileList = (files, accept, maxSizeByte, maxFiles, isMaxFilesExceeded, uploadedFiles) => {
    // подготавливаем измененный интерфейс файлов
    const fccFiles = Array.from<FCCFile>(files).map((file) => {
        // @ts-ignore
        file.url = URL.createObjectURL(file);
        file.progress = 0;
        const tzoffset = new Date().getTimezoneOffset() * 60000;
        const localISOTime = new Date(Date.now() - tzoffset).toISOString();
        file.date = localISOTime;
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

        // фильтруем по размеру и по количеству загружаемых файлов
        const correctMaxSizeByte = (file.size ?? 0) <= maxSizeByte;

        const correctMaxFiles = maxFiles && !isMaxFilesExceeded && files.length + uploadedFiles <= maxFiles;
        const correct = correctAccept && correctMaxSizeByte && correctMaxFiles;

        if (!correct) {
            errorFiles.push({
                file,
                errors: {
                    accept: !correctAccept,
                    maxSizeByte: !correctMaxSizeByte,
                    maxFiles: !correctMaxFiles,
                },
            });
        }

        return correct;
    });

    return { correctFiles, errorFiles };
};

const buildChildren = (children) =>
    React.Children.toArray(children).map((c: any) => cloneElement(c, { key: c.props.file.url }));

export const FileLoader = forwardRef<HTMLInputElement, FileLoaderProps>((props, ref) => {
    const {
        onChange,
        children,
        content,
        subContent,
        disabled,
        maxSizeByte = Infinity,
        invalid,
        maxFiles = Infinity,
        accept = '',
        multiple = true,
        ...attrs
    } = props;

    const [over, setOver] = useState(false);
    let isMaxFilesExceeded = false;
    const uploadedFiles = React.Children.count(children);
    const changeHandler = useCallback(
        (e) => {
            e.preventDefault();
            if (typeof onChange === 'function') {
                if (maxFiles && children && React.Children.count(children) > maxFiles - 1) {
                    isMaxFilesExceeded = true;
                }
                const { correctFiles, errorFiles } = buildFileList(
                    e.target.files,
                    accept,
                    maxSizeByte,
                    maxFiles,
                    isMaxFilesExceeded,
                    uploadedFiles
                );
                onChange(e, correctFiles, errorFiles);
            }
        },
        [onChange, accept, maxSizeByte, maxFiles]
    );

    const onDragEnterHandler = useCallback(() => {
        setOver(true);
    }, []);

    const onDropHandler = useCallback(
        (e) => {
            e.preventDefault();
            if (typeof onChange === 'function' && !disabled) {
                if (maxFiles && children && React.Children.count(children) > maxFiles - 1) {
                    isMaxFilesExceeded = true;
                }
                const { correctFiles, errorFiles } = buildFileList(
                    e.dataTransfer.files,
                    accept,
                    maxSizeByte,
                    maxFiles,
                    isMaxFilesExceeded,
                    uploadedFiles
                );
                onChange(e, correctFiles, errorFiles);
            }
            setOver(false);
        },
        [disabled, accept, maxSizeByte, maxFiles, onChange]
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
                $over={over}
                $invalid={invalid}
                $disabled={disabled}
                onDrop={onDropHandler}
                onDragEnter={onDragEnterHandler}
                onDragOver={onDragOver}
                onDragLeave={onDragLeaveHandler}>
                {content && <Content>{content}</Content>}
                {subContent && <SubContent>{subContent}</SubContent>}
                <InputFile
                    {...(attrs as {})}
                    ref={ref}
                    type='file'
                    accept={accept}
                    value={'' as any}
                    disabled={disabled}
                    onChange={changeHandler}
                    multiple={multiple}
                />
            </Box>
            {children && Boolean(React.Children.count(children)) && <List>{buildChildren(children)}</List>}
        </Wrapper>
    );
}) as ForwardRefExoticComponent<FileLoaderProps & RefAttributes<HTMLInputElement>> & { File: typeof File };

FileLoader.displayName = 'FileLoader';

FileLoader.File = File;
