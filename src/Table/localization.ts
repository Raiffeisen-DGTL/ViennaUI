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
    'ds.table.settings.selectAll.fullData'?: string[];
    'ds.table.settings.selectAll.onPage'?: string[];
    'ds.table.emptyColumns.title'?: string;
    'ds.table.emptyColumns.description'?: string;
    'ds.table.emptyColumns.showAllColumns'?: string;
    'ds.table.invalidData.title'?: string;
    'ds.table.invalidData.description'?: string;
    'ds.table.settings.selectAll.cancel'?: string;
}

export const defaultTableLocalization: Required<TableLocalization> = {
    'ds.table.filter.sortDown': 'Сортировать',
    'ds.table.settings': 'Настройка таблицы',
    'ds.table.filter.sortUp': 'Сортировать',
    'ds.table.settings.groupBy': 'Группировка',
    'ds.table.settings.columnSearch': 'Поиск...',
    'ds.table.settings.showAllColumns': 'Показать все',
    'ds.table.settings.hideAllColumns': 'Скрыть все',
    'ds.table.settings.selectAll.fullData': ['Выбрать все строки', 'в таблице', 'Выбраны все строки', 'на странице'],
    'ds.table.settings.selectAll.onPage': ['Выбрать все строки', 'на странице', 'Выбраны все строки', 'в таблице'],
    'ds.table.emptyColumns.title': 'Нет колонок для отображения',
    'ds.table.emptyColumns.description':
        'В таблице отключены все колонки. Выберите колонки для отображения в настройках таблицы или включите все доступные.',
    'ds.table.emptyColumns.showAllColumns': 'Включить все колонки',
    'ds.table.invalidData.title': 'Некорректные данные для отображения',
    'ds.table.invalidData.description': 'Переданные в таблицу данные не являются списком и не могут быть отображены',
    'ds.table.settings.selectAll.cancel': 'Отменить',
};
