import { DSLocalizationProps } from '../Localization';

export interface SelectLocalization {
    'ds.select.empty'?: string;
    'ds.select.addButton'?: string;
}

export type SelectLocalizationProps = DSLocalizationProps<SelectLocalization>;

export const defaultSelectLocalization: Required<SelectLocalization> = {
    'ds.select.empty': 'Нет элементов для отображения',
    'ds.select.addButton': 'Добавить',
};
