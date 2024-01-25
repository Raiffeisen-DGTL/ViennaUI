import React, { useCallback, useState, useEffect, PropsWithChildren } from 'react';
import { CloseCancelX } from '@fcc/icons';
import { Box, Icon, Main, Data, Name, CloseIcon, Info, Progress, ImgIcon } from './File.styles';
import { Progressbar } from '../../Progressbar';
import { getFileExtension, formatDate, formatBytes } from '../../Utils';
import { useLocalization } from '../../Localization';
import { FileLoaderLocalizationProps, defaultFileLoaderLocalization } from '../localization';
import { getIconByExtension } from './getIconByExtension';

export interface FCCFile extends Partial<File> {
    id?: string;
    url?: string;
    date?: string | Date;
    progress?: number;
    disabled?: boolean;
    closable?: boolean;
    loading?: boolean;
}

export interface FileProps extends FileLoaderLocalizationProps {
    /** Файл */
    file: FCCFile;
    altText?: string;
    invalid?: boolean;
    disabled?: boolean;
    /** Наличие крестика */
    closable?: boolean;
    /** Процент загрузки */
    progress?: number;
    /** Отображение загрузки */
    loading?: boolean;
    /** Отображение произвольного расширения */
    extension?: string;
    onClick?: (file: FCCFile) => void;
    onDelete?: (file: FCCFile) => void;
    confirmDelete?: (file: FCCFile) => boolean;
}

const getImage = (file: FCCFile) => {
    if (/image\/.*/.test(file.type ?? '')) {
        return file.url;
    }

    return '';
};

const getFileIcon = (file: FCCFile) => {
    const extension = getFileExtension(file);
    return getIconByExtension(extension);
};

export const File: React.FC<PropsWithChildren<FileProps>> = (props) => {
    const {
        file,
        confirmDelete,
        onDelete,
        onClick,
        invalid,
        children,
        closable = true,
        disabled = false,
        progress = 0,
        loading,
        altText,
        extension,
        localization,
    } = props;

    const l10n = useLocalization(localization, defaultFileLoaderLocalization);

    const [toggle, setToggle] = useState(false);

    const FileIcon = getFileIcon(file);

    const close = useCallback(() => {
        if (typeof confirmDelete === 'undefined' || (typeof confirmDelete === 'function' && confirmDelete(file))) {
            if (!disabled && closable && typeof onDelete === 'function') {
                setToggle(false);
                setTimeout(() => {
                    onDelete(file);
                }, 200);
            }
        }
    }, [file, onDelete, disabled, closable, confirmDelete]);

    const handleClick = useCallback(() => {
        if (!disabled && typeof onClick === 'function') {
            onClick(file);
        }
    }, [file, onClick, disabled]);

    const handleKeyDownName = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') {
                handleClick();
            }
            if (e.key === 'Delete' || e.key === 'Backspace') {
                close();
            }
        },
        [close, handleClick]
    );

    const handleKeyDownBtn = useCallback(
        (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') {
                close();
            }
        },
        [close]
    );

    useEffect(() => {
        setToggle(true);
    }, []);

    const constructAdditionalInform = () => {
        if (file.date && file.size) {
            return `${formatDate(file.date)} • ${formatBytes(file.size)}`;
        }

        return altText;
    };

    return (
        <Box $toggle={toggle}>
            <Icon $image={getImage(file)}>
                <ImgIcon>{extension ?? <FileIcon size='l' />}</ImgIcon>
            </Icon>
            <Main>
                <Info>
                    <Name tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDownName}>
                        {file.name}
                    </Name>
                    <Data $invalid={invalid}>
                        {loading && `${l10n('ds.fileLoader.file.loading')} ${progress}%`}
                        {!loading && (children || constructAdditionalInform())}
                    </Data>
                </Info>
                {Boolean(progress) && loading && (
                    <Progress>
                        <Progressbar size='s' color='oslo100' value={progress} />
                    </Progress>
                )}
            </Main>
            {closable && (
                <CloseIcon tabIndex={0} onClick={close} onKeyDown={handleKeyDownBtn}>
                    <CloseCancelX size={'s'} />
                </CloseIcon>
            )}
        </Box>
    );
};
