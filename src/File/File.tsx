import React, { useCallback, useState, useEffect, PropsWithChildren } from 'react';
import { Cross16Icon } from 'vienna.icons';
import {
    Box,
    Icon,
    Main,
    Data,
    DataDescription,
    DataInfo,
    Name,
    CloseIcon,
    Info,
    Progress,
    ImgIcon,
    PropsBox,
} from './File.styles';
import { Progressbar } from '../Progressbar';
import { getFileExtension, formatDate, formatBytes, ComponentWrapper } from '../Utils';
import { Link } from '../Link';
import { Flex } from '../Flex';
import { useLocalization } from '../Localization';
import { FileLocalizationProps, defaultFileLocalization } from './localization';
import { getIconByExtension } from './getIconByExtension';
import { BoxStyled } from '@/Utils/styled';

export const defaultFileTestId: FileProps['testId'] = {
    icon: 'file_icon',
    name: 'file_name',
    cross: 'file_cross',
};

export interface FCCFile extends Partial<File> {
    id?: string;
    url?: string;
    date?: string | Date;
    progress?: number;
    disabled?: boolean;
    closable?: boolean;
    loading?: boolean;
}

export interface FileProps extends BoxStyled<typeof Box, PropsBox>, FileLocalizationProps {
    /** Файл */
    file: FCCFile;
    altText?: string;
    description?: string;
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
    /** Наличие ссылки в названии */
    hasNameLink?: boolean;
    /** Показ/скрытие инфо о файле в случае ошибки (по умолчанию выключено) */
    hideAltTextOnError?: boolean;
    onClick?: (file: FCCFile) => void;
    onDelete?: (file: FCCFile) => void;
    confirmDelete?: (file: FCCFile) => boolean | Promise<boolean>;
    /** Включить анимацию. По умолчанию, true */
    animation?: boolean;
    /** включает возможность скачать файл c переданными названием при клике на него */
    download?: string;
    testId?: {
        icon?: string;
        name?: string;
        cross?: string;
    };
}

const getImage = (file: FCCFile) => {
    const type = file.type ?? '';
    if (/image\/.*/.test(type) && !type.includes('tiff')) {
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
        description,
        extension,
        hasNameLink,
        localization,
        animation = true,
        hideAltTextOnError = false,
        download,
        testId = defaultFileTestId,
        ...attrs
    } = props;

    const l10n = useLocalization(localization, defaultFileLocalization);

    const [toggle, setToggle] = useState(false);

    const FileIcon = getFileIcon(file);

    const close = useCallback(async () => {
        if (
            typeof confirmDelete === 'undefined' ||
            (typeof confirmDelete === 'function' && (await confirmDelete(file)))
        ) {
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
        async (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') {
                handleClick();
            }
            if (e.key === 'Delete' || e.key === 'Backspace') {
                await close();
            }
        },
        [close, handleClick]
    );

    const handleKeyDownBtn = useCallback(
        async (e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.key === 'Enter') {
                await close();
            }
        },
        [close]
    );

    useEffect(() => {
        setToggle(true);
    }, []);

    const constructAdditionalInform = () => {
        const infoData = [file.date && formatDate(file.date), file.size && formatBytes(file.size)];
        const info = infoData.filter(Boolean).join(' • ');
        return info || altText;
    };
    const textInDescription = children ?? description;

    return (
        <Box {...attrs} $toggle={toggle} $animation={animation}>
            <ComponentWrapper
                component={(hasNameLink || download) && file.url && !disabled ? Link : undefined}
                props={{ href: file.url, target: '_blank', download }}>
                <Icon $image={getImage(file)} $disabled={disabled} data-testid={testId?.icon} onClick={handleClick}>
                    <ImgIcon>{extension ?? <FileIcon size='l' />}</ImgIcon>
                </Icon>
            </ComponentWrapper>
            <Main>
                <Info>
                    <ComponentWrapper
                        component={(hasNameLink || download) && file.url && !disabled ? Link : undefined}
                        props={{ href: file.url, target: '_blank', download }}>
                        <Name
                            $hover={!!(hasNameLink || download || onClick)}
                            $disabled={disabled}
                            tabIndex={0}
                            data-testid={testId?.name}
                            onClick={handleClick}
                            onKeyDown={handleKeyDownName}>
                            {file.name}
                        </Name>
                    </ComponentWrapper>
                    <Data>
                        {loading && `${l10n('ds.file.loading')} ${progress}%`}
                        {!loading && (
                            <Flex wrap={'wrap'} gap={'s3'}>
                                {textInDescription && (
                                    <Flex.Item>
                                        <DataDescription $invalid={invalid} $disabled={disabled}>
                                            {textInDescription}
                                        </DataDescription>
                                    </Flex.Item>
                                )}
                                {!hideAltTextOnError && (
                                    <Flex.Item>
                                        <DataInfo $disabled={disabled}>{constructAdditionalInform()}</DataInfo>
                                    </Flex.Item>
                                )}
                            </Flex>
                        )}
                    </Data>
                </Info>
                {Boolean(progress) && loading && (
                    <Progress>
                        <Progressbar size='s' color='oslo100' value={progress} />
                    </Progress>
                )}
            </Main>
            {closable && (
                <CloseIcon
                    $disabled={disabled}
                    tabIndex={0}
                    data-testid={testId?.cross}
                    onClick={close}
                    onKeyDown={handleKeyDownBtn}>
                    <Cross16Icon size={'s'} />
                </CloseIcon>
            )}
        </Box>
    );
};

File.displayName = 'File';
