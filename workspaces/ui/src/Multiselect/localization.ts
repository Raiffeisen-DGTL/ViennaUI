import { DSLocalizationProps, Localization } from '../Localization';

export interface MultiselectLocalizationMap {
    'ds.multiselect.empty'?: string;
    'ds.multiselect.extra'?: string;
}

export type MultiselectLocalization = Localization<MultiselectLocalizationMap, MultiselectLocalizationCotext>;
interface Extra {
    count: number | string;
}

export type MultiselectLocalizationCotext = Extra | undefined;

export type MultiselectLocalizationProps = DSLocalizationProps<
    MultiselectLocalizationMap,
    MultiselectLocalizationCotext
>;

export const multiselectLocalizationMap: MultiselectLocalizationMap = {
    'ds.multiselect.empty': 'Нет элементов для отображения',
};

export const defaultMultiselectLocalization = (
    key: keyof MultiselectLocalizationMap,
    context: MultiselectLocalizationCotext
) => {
    if (key === 'ds.multiselect.extra') {
        return `Еще ${context?.count}`;
    }

    return multiselectLocalizationMap[key];
};
