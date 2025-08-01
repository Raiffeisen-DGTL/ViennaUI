import React from 'react';
import {
    XlsIcon,
    JpgIcon,
    JpegIcon,
    DocIcon,
    DocxIcon,
    CameraPhotoIcon,
    PdfIcon,
    ArchiveIcon,
    DocumentIcon,
    Music1Icon,
    Music2Icon,
    MovieIcon,
    SettingsIcon,
    DocEditIcon,
    DocPreviewIcon,
    IconProps,
} from 'vienna.icons';
import { isProperKey } from '../Utils';

const EXTENSION_ICONS = {
    xls: XlsIcon,
    xlsx: XlsIcon,
    jpg: JpgIcon,
    jpeg: JpegIcon,
    jpegx: CameraPhotoIcon,
    png: CameraPhotoIcon,
    doc: DocIcon,
    docx: DocxIcon,
    pdf: PdfIcon,
    zip: ArchiveIcon,
    rar: ArchiveIcon,
    rar5: ArchiveIcon,
    '7z': ArchiveIcon,
    tar: ArchiveIcon,
    gz: ArchiveIcon,
    mp3: Music1Icon,
    wma: Music1Icon,
    wav: Music1Icon,
    flac: Music1Icon,
    midi: Music2Icon,
    ogg: Music2Icon,
    avi: MovieIcon,
    mov: MovieIcon,
    divx: MovieIcon,
    mp4: MovieIcon,
    mpg: MovieIcon,
    wmv: MovieIcon,
    txt: DocEditIcon,
    dll: SettingsIcon,
    deb: SettingsIcon,
    dev: SettingsIcon,
    ppt: DocPreviewIcon,
    pptx: DocPreviewIcon,
};

export const getIconByExtension = (extension: string): React.FC<IconProps> => {
    const key = extension.toLowerCase();

    return isProperKey(EXTENSION_ICONS, key) ? EXTENSION_ICONS[key] : DocumentIcon;
};
