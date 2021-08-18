import React, { useCallback, useState, useEffect } from 'react';
import { Close } from 'vienna.icons';
import { Box, Icon, Main, Data, Name, CloseIcon, Info, Progress, Img } from './File.styles';
import { Progressbar } from '../../Progressbar';
import { getFileExtension, formatDate, formatBytes } from '../../Utils';
import { useLocalization } from '../../Localization';
import { FileLoaderLocalizationProps, defaultFileLoaderLocalization } from '../localization';

export interface FCCFile extends Partial<File> {
    id?: string;
    url?: string;
    date: string | Date;
    progress?: number;
    disabled?: boolean;
    closable?: boolean;
    loading?: boolean;
}

export interface Props extends FileLoaderLocalizationProps {
    /** Файл */
    file: FCCFile;
    altText?: string;
    invalid?: boolean;
    /** Строка информации (там где вывод даты) */
    children?: React.ReactNode;
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
}

const getImage = (file: FCCFile) => {
    if (/image\/.*/.test(file.type ?? '')) {
        return file.url;
    }

    return '';
};

export const File: React.FC<Props> = (props: Props) => {
    const {
        file,
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
    } = props;

    const localization = useLocalization(props, defaultFileLoaderLocalization);

    const [toggle, setToggle] = useState(false);

    const close = useCallback(() => {
        if (!disabled && closable && typeof onDelete === 'function') {
            setToggle(false);
            setTimeout(() => {
                onDelete(file);
            }, 200);
        }
    }, [file, onDelete, disabled, closable]);

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

    const constructAddtitionalInform = () => {
        if (file.date && file.size) {
            return `${formatDate(file.date)} • ${formatBytes(file.size)}`;
        }

        return altText;
    };

    return (
        <Box toggle={toggle}>
            <Icon image={getImage(file)}>
                <Img>{extension ?? getFileExtension(file)}</Img>
            </Icon>
            <Main>
                <Info>
                    <Name tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDownName}>
                        {file.name}
                    </Name>
                    <Data invalid={invalid}>
                        {loading && `${localization('ds.fileLoader.file.loading')} ${progress}%`}
                        {!loading && (children || constructAddtitionalInform())}
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
                    <Close size={'s'} />
                </CloseIcon>
            )}
        </Box>
    );
};
