import { DSLocalizationProps, DSLocalization } from '../Localization';

export type TableLocalizationProps = DSLocalizationProps<TableLocalization>;

export type TableLocalizationContext = DSLocalization<TableLocalization>;

export interface TableLocalization {
    'ds.table.filter.sortUp'?: string;
    'ds.table.filter.sortDown'?: string;
    'ds.table.settings'?: string;
    'ds.table.settings.groupBy'?: string;
    'ds.table.settings.columnSearch'?: string;
    'ds.table.settings.showAllColumns'?: string;
    'ds.table.settings.hideAllColumns'?: string;
}

export const defaultTableLocalization: TableLocalization = {
    'ds.table.filter.sortDown': 'Сортировать',
    'ds.table.settings': 'Настройка таблицы',
    'ds.table.filter.sortUp': 'Сортировать',
    'ds.table.settings.groupBy': 'Группировка',
    'ds.table.settings.columnSearch': 'Поиск...',
    'ds.table.settings.showAllColumns': 'Показать все',
    'ds.table.settings.hideAllColumns': 'Скрыть все',
};
