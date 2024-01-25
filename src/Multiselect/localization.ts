import { DSLocalizationProps, Localization } from '../Localization';

export interface MultiselectLocalizationMap {
    'ds.multiselect.empty'?: string;
    'ds.multiselect.extra'?: string;
}

export type MultiselectLocalization = Localization<MultiselectLocalizationMap, MultiselectLocalizationContext>;
interface Extra {
    count: number | string;
}

export type MultiselectLocalizationContext = Extra | undefined;

export type MultiselectLocalizationProps = DSLocalizationProps<
    MultiselectLocalizationMap,
    MultiselectLocalizationContext
>;

export const multiselectLocalizationMap: MultiselectLocalizationMap = {
    'ds.multiselect.empty': 'Нет элементов для отображения',
};

export const defaultMultiselectLocalization = (
    key: keyof MultiselectLocalizationMap,
    context: MultiselectLocalizationContext
) => {
    if (key === 'ds.multiselect.extra') {
        return `Еще ${context?.count}`;
    }

    return multiselectLocalizationMap[key];
};
