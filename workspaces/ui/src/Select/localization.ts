import { DSLocalizationProps } from '../Localization';

export interface SelectLocalization {
    'ds.select.empty'?: string;
}

export type SelectLocalizationProps = DSLocalizationProps<SelectLocalization>;

export const defaultSelectLocalization: SelectLocalization = {
    'ds.select.empty': 'Нет элементов для отображения',
};
