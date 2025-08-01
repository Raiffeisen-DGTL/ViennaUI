import { DSLocalizationProps } from '../Localization';

export interface BreadcrumbsLocalization {
    'ds.breadcrumbs.backTo'?: string;
}

export type BreadcrumbsLocalizationProps = DSLocalizationProps<BreadcrumbsLocalization>;

export const defaultBreadcrumbsLocalization: Required<BreadcrumbsLocalization> = {
    'ds.breadcrumbs.backTo': 'Вернуться к',
};
