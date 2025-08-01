import React, {
    useCallback,
    useState,
    RefAttributes,
    ForwardRefExoticComponent,
    ReactNode,
    forwardRef,
    useEffect,
    ReactElement,
    isValidElement,
} from 'react';
import { Box, List, Content, SubContent, Wrapper, InputFile, HelperTextBox } from './FileLoader.styles';
import { File, FCCFile, FileProps } from '../File';
import { getFileExtension, OnChangeHandler, Pretty } from '../Utils';
import { Flex } from '../Flex';

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
    onChange?: OnChangeHandler<
        FCCFile[],
        React.ChangeEvent | React.DragEvent | ClipboardEvent,
        { errorFiles: FCCFileError[]; name?: string }
    >;
    /** Ограничение на количество загружаемых файлов */
    maxFiles?: number;
    children?: ReactNode | undefined;
    /** ref на HTMLElement, на который вешается слушатель событий для вставки файлов из буфера обмена */
    pasteListenerRef?: React.MutableRefObject<HTMLElement>;
    helperText?: ReactNode;
}

export const buildFileList = (
    files: FileList | File[],
    accept: string | undefined,
    maxSizeByte: number,
    maxFiles: number | undefined,
    isMaxFilesExceeded: boolean,
    uploadedFiles: number
) => {
    // подготавливаем измененный интерфейс файлов
    const fccFiles = Array.from(files).map((file) => {
        const fccFile: FCCFile = file;
        fccFile.url = URL.createObjectURL(file);
        fccFile.progress = 0;
        const tzoffset = new Date().getTimezoneOffset() * 60000;
        const localISOTime = new Date(Date.now() - tzoffset).toISOString();
        fccFile.date = localISOTime;
        return fccFile;
    });
    // файлы с ошибками
    const errorFiles: FCCFileError[] = [];

    const correctFiles = fccFiles.filter((file: FCCFile) => {
        // фильтруем по расширению и MIME
        const accepts: string[] = accept?.split(',') ?? [];
        const correctAccept: boolean =
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

const buildChildren = (children: ReactNode | ReactNode[]) =>
    React.Children.map(children as ReactElement[], (child: ReactElement<FileProps>) =>
        isValidElement(child) ? React.cloneElement(child, { key: child.props.file.url }) : null
    ) as ReactNode[];

export namespace FileLoader {
    export type OnChange = Pretty.Func<
        OnChangeHandler<
            FCCFile[],
            React.ChangeEvent | React.DragEvent | ClipboardEvent,
            { errorFiles: FCCFileError[]; name?: string }
        >,
        FCCFile
    >;
}

export const FileLoader = forwardRef<HTMLInputElement, FileLoaderProps>((props, ref) => {
    const {
        onChange,
        children,
        content,
        name,
        subContent,
        disabled,
        pasteListenerRef,
        maxSizeByte = Infinity,
        invalid,
        maxFiles = Infinity,
        accept = '',
        multiple = true,
        helperText,
        ...attrs
    } = props;
    const [over, setOver] = useState(false);
    let isMaxFilesExceeded = false;
    const uploadedFiles = React.Children.count(children);

    const handleAddFiles = useCallback(
        (event: React.ChangeEvent<HTMLInputElement> | ClipboardEvent, files: FileList | null) => {
            if (typeof onChange === 'function') {
                if (maxFiles && children && React.Children.count(children) > maxFiles - 1) {
                    isMaxFilesExceeded = true;
                }
                if (files) {
                    const { correctFiles, errorFiles } = buildFileList(
                        files,
                        accept,
                        maxSizeByte,
                        maxFiles,
                        isMaxFilesExceeded,
                        uploadedFiles
                    );
                    onChange({ value: correctFiles, event, options: { errorFiles, name } });
                }
            }
        },
        [onChange, name, accept, maxSizeByte, maxFiles]
    );

    const changeHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            handleAddFiles(e, e.target.files);
        },
        [handleAddFiles]
    );

    const onDragEnterHandler = useCallback(() => {
        setOver(true);
    }, []);

    const onDropHandler = useCallback(
        (event: React.DragEvent<HTMLDivElement>) => {
            event.preventDefault();
            if (typeof onChange === 'function' && !disabled) {
                if (maxFiles && children && React.Children.count(children) > maxFiles - 1) {
                    isMaxFilesExceeded = true;
                }
                const files = multiple ? event.dataTransfer.files : [event.dataTransfer.files[0]];
                const { correctFiles, errorFiles } = buildFileList(
                    files,
                    accept,
                    maxSizeByte,
                    maxFiles,
                    isMaxFilesExceeded,
                    uploadedFiles
                );
                onChange({ value: correctFiles, event, options: { errorFiles, name } });
            }
            setOver(false);
        },
        [disabled, name, accept, maxSizeByte, maxFiles, onChange]
    );

    const onDragOver = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
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

    useEffect(() => {
        const fn = (event: ClipboardEvent) => {
            const { clipboardData } = event;

            if (clipboardData === null) return;

            handleAddFiles(event, clipboardData.files);
        };

        pasteListenerRef?.current?.addEventListener('paste', fn);

        return () => {
            pasteListenerRef?.current?.removeEventListener('paste', fn);
        };
    }, [handleAddFiles, pasteListenerRef]);

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
                {content && <Content $disabled={disabled}>{content}</Content>}
                {subContent && <SubContent $disabled={disabled}>{subContent}</SubContent>}
                <InputFile
                    {...attrs}
                    ref={ref}
                    type='file'
                    accept={accept}
                    value={''}
                    disabled={disabled}
                    multiple={multiple}
                    onChange={changeHandler}
                />
            </Box>
            {helperText && (
                <Flex justifyContent='center' marginTop='s1'>
                    <HelperTextBox $invalid={invalid}>{helperText}</HelperTextBox>
                </Flex>
            )}
            {children && Boolean(React.Children.count(children)) && <List>{buildChildren(children)}</List>}
        </Wrapper>
    );
}) as ForwardRefExoticComponent<FileLoaderProps & RefAttributes<HTMLInputElement>> & { File: typeof File };

FileLoader.displayName = 'FileLoader';

FileLoader.File = File;
