import React, { useCallback, useRef } from 'react';
import { Box } from './FileLoaderButton.styles';
import { Button, ButtonProps } from '../Button';
import { InputFile } from '../FileLoader/FileLoader.styles';
import { FCCFile, FCCFileError, buildFileList } from '../FileLoader';

export interface FileLoaderButtonProps extends ButtonProps {
    loading?: boolean;
    multiple?: boolean;
    /** Перечесление через запятую поддерживаемых форматов и/или MIME типов */
    accept?: string;
    /** Максимальный размер каждого файла в байтах */
    maxSizeByte?: number;
    disabled?: boolean;
    onChange?: (event, files: FCCFile[], errorFiles: FCCFileError[]) => void;
}
export const FileLoaderButton: React.FC<FileLoaderButtonProps> = (
    props: React.PropsWithChildren<FileLoaderButtonProps>
) => {
    const { children, loading, multiple, onChange, disabled, accept, maxSizeByte = Infinity, ...attrs } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const clickHandler = useCallback(() => {
        if (inputRef.current && !loading) {
            inputRef.current.click();
        }
    }, [inputRef, loading]);

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
};

FileLoaderButton.displayName = 'FileLoaderButton';
export default FileLoaderButton;
