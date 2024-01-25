import { Module } from '../../types';
import { TableProps } from '../../Table';

export interface BaseConfig {
    settings: {
        dataKey: TableProps['dataKey'];
        size?: TableProps['size'];
        valign?: TableProps['valign'];
        noHeader?: TableProps['noHeader'];
        noRowDivider?: TableProps['noRowDivider'];
        maxHeight?: TableProps['maxHeight'];
        onRowClick?: TableProps['onRowClick'];
        onRowDoubleClick?: TableProps['onRowDoubleClick'];
        outlined?: boolean;
        pinnableColumns?: boolean;
    };
}

const defaultDataKey = (item) => item.id;

export const BaseModule: Module = {
    name: 'base',
    initConfig: ({ settings }): BaseConfig => {
        const {
            noHeader,
            noRowDivider,
            maxHeight,
            size,
            valign,
            onRowClick,
            onRowDoubleClick,
            outlined,
            pinnableColumns,
            dataKey,
        } = settings;

        return {
            settings: {
                noHeader,
                noRowDivider,
                maxHeight,
                size,
                valign,
                onRowClick,
                onRowDoubleClick,
                outlined,
                pinnableColumns,
                dataKey: dataKey ?? defaultDataKey,
            },
        };
    },
};
