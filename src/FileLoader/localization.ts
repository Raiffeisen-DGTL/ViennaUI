import { DSLocalizationProps, DSLocalization } from '../Localization';

export interface FileLoaderLocalization {
    'ds.fileLoader.file.loading'?: string;
}

export type FileLoaderLocalizationProps = DSLocalizationProps<FileLoaderLocalization>;

export type FileLoaderLocalizationContext = DSLocalization<FileLoaderLocalization>;

export const defaultFileLoaderLocalization: FileLoaderLocalization = {
    'ds.fileLoader.file.loading': 'Загружено',
};
