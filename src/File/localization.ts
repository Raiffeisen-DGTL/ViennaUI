import { DSLocalizationProps, DSLocalization } from '../Localization';

export interface FileLocalization {
    'ds.file.loading'?: string;
}

export type FileLocalizationProps = DSLocalizationProps<FileLocalization>;

export type FileLocalizationContext = DSLocalization<FileLocalization>;

export const defaultFileLocalization: Required<FileLocalization> = {
    'ds.file.loading': 'Загружено',
};
