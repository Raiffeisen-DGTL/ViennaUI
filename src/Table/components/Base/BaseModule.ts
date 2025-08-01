import { Module, TableData, TableSize } from '../../types';
import { TableProps } from '../../Table';

export interface BaseConfig<T> {
    settings: {
        dataKey: NonNullable<TableProps<T>['dataKey']>;
        size: TableSize;
        valign?: TableProps<T>['valign'];
        noHeader?: TableProps<T>['noHeader'];
        noRowDivider?: TableProps<T>['noRowDivider'];
        maxHeight?: TableProps<T>['maxHeight'];
        onRowClick?: TableProps<T>['onRowClick'];
        onRowGroupClick?: TableProps<T>['onRowGroupClick'];
        onRowItemClick?: TableProps<T>['onRowItemClick'];
        onRowDoubleClick?: TableProps<T>['onRowDoubleClick'];
        onRowRightClick?: TableProps<T>['onRowRightClick'];
        outlined?: boolean;
        pinnableColumns?: boolean;
        isOuterSortable: boolean;
    };
}

const defaultDataKey = (item: TableData): string => item.id ?? '';

export const BaseModule: Module<BaseConfig<TableData>, undefined, TableData> = {
    name: 'base',
    initConfig: ({ settings }) => {
        const {
            noHeader,
            noRowDivider,
            maxHeight,
            size,
            valign,
            onRowClick,
            onRowDoubleClick,
            onRowRightClick,
            outlined,
            pinnableColumns,
            dataKey,
            isOuterSortable,
        } = settings;

        return {
            settings: {
                noHeader,
                noRowDivider,
                maxHeight,
                size: size ?? 's',
                valign,
                onRowClick,
                onRowDoubleClick,
                onRowRightClick,
                outlined,
                pinnableColumns,
                dataKey: dataKey ?? defaultDataKey,
                isOuterSortable: isOuterSortable ?? true,
            },
        };
    },
};
