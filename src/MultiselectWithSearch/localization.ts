import { DSLocalizationProps, Localization } from '../Localization';

export interface MultiselectWithSearchLocalizationMap {
    'ds.multiselect.empty'?: string;
    'ds.multiselect.extra'?: string;
    'ds.multiselect.selectAll'?: string;
    'ds.multiselect.reset'?: string;
    'ds.multiselect.addButton'?: string;
}

export type MultiselectWithSearchLocalization = Localization<
    MultiselectWithSearchLocalizationMap,
    MultiselectWithSearchLocalizationContext
>;
interface Extra {
    count: number | string;
}

export type MultiselectWithSearchLocalizationContext = Extra | undefined;

export type MultiselectWithSearchLocalizationProps = DSLocalizationProps<
    MultiselectWithSearchLocalizationMap,
    MultiselectWithSearchLocalizationContext
>;

export const multiselectWithSearchLocalizationMap: Required<
    Omit<MultiselectWithSearchLocalizationMap, 'ds.multiselect.extra'>
> = {
    'ds.multiselect.empty': 'Ничего не найдено',
    'ds.multiselect.selectAll': 'Выбрать всё',
    'ds.multiselect.reset': 'Сбросить',
    'ds.multiselect.addButton': 'Добавить',
};

export const defaultMultiselectWithSearchLocalization = (
    key: keyof MultiselectWithSearchLocalizationMap,
    context: MultiselectWithSearchLocalizationContext
) => {
    if (key === 'ds.multiselect.extra') {
        return `Еще ${context?.count}`;
    }

    return multiselectWithSearchLocalizationMap[key];
};
