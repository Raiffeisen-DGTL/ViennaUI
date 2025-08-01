import React, { PropsWithChildren, useCallback, useRef } from 'react';
import { useControlState } from 'vienna.react-use';
import { Box } from './FileLoaderButton.styles';
import { Button, ButtonProps } from '../Button';
import { InputFile } from '../FileLoader/FileLoader.styles';
import { FCCFileError, buildFileList } from '../FileLoader';
import { FCCFile } from '../File';
import { OnChangeHandler, Pretty } from '../Utils';

export interface FileLoaderButtonProps extends Omit<ButtonProps, 'onChange'>, PropsWithChildren {
    loading?: boolean;
    multiple?: boolean;
    /** Перечесление через запятую поддерживаемых форматов и/или MIME типов */
    accept?: string;
    /** Максимальный размер каждого файла в байтах */
    maxSizeByte?: number;
    /** Ограничение на количество загружаемых файлов */
    maxFiles?: number;
    disabled?: boolean;
    files?: File[];
    onChange?: OnChangeHandler<
        FCCFile[],
        React.ChangeEvent | React.DragEvent | ClipboardEvent,
        { errorFiles: FCCFileError[]; name?: string }
    >;
}

const emptyArray: File[] = [];

export namespace FileLoaderButton {
    export type OnChange = Pretty.Func<
        OnChangeHandler<
            FCCFile[],
            React.ChangeEvent | React.DragEvent | ClipboardEvent,
            { errorFiles: FCCFileError[]; name?: string }
        >,
        FCCFile
    >;
}

export function FileLoaderButton(props: FileLoaderButtonProps) {
    const {
        children,
        loading,
        multiple,
        onChange,
        disabled,
        accept,
        maxSizeByte = Infinity,
        maxFiles = Infinity,
        files = emptyArray,
        ...attrs
    } = props;
    let isMaxFilesExceeded = false;

    const [uploadedFiles, setUploadedFiles] = useControlState({
        value: files,
        defaultStateValue: emptyArray,
    });

    const inputRef = useRef<HTMLInputElement>(null);
    const clickHandler = useCallback(() => {
        if (inputRef.current && !loading) {
            inputRef.current.click();
        }
    }, [inputRef, loading]);

    const changeHandler = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            event.preventDefault();

            if (!onChange) return;

            const targetFiles: FileList | null = event.target.files;
            const filesArray = Array.from(targetFiles || []);
            if (maxFiles && children && uploadedFiles.length > maxFiles - 1) {
                isMaxFilesExceeded = true;
            }
            setUploadedFiles([...uploadedFiles, ...filesArray]);
            if (targetFiles) {
                const { correctFiles, errorFiles } = buildFileList(
                    targetFiles,
                    accept,
                    maxSizeByte,
                    maxFiles,
                    isMaxFilesExceeded,
                    uploadedFiles.length
                );
                onChange({ value: correctFiles, event, options: { errorFiles } });
            }
        },
        [onChange, accept, maxSizeByte, maxFiles, uploadedFiles]
    );

    return (
        <Box>
            <Button loading={loading} design='outline' disabled={disabled} onClick={clickHandler} {...attrs}>
                {children}
            </Button>
            <InputFile
                ref={inputRef}
                type='file'
                value=''
                multiple={multiple}
                accept={accept}
                disabled={disabled}
                onChange={changeHandler}
            />
        </Box>
    );
}

FileLoaderButton.displayName = 'FileLoaderButton';
