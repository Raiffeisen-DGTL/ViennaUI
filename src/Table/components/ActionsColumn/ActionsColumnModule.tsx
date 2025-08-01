import { ReactElement } from 'react';
import { Module, TableData } from '../../types';
import { ActionsColumnProps } from './ActionsColumn';

export type ActionsColumnConfig = ActionsColumnProps<TableData>;

export const ActionsColumnModule: Module<ActionsColumnConfig, undefined, TableData> = {
    name: 'actionsColumn',
    feature: 'ActionsColumn',
    initConfig: ({ child }): ActionsColumnConfig => {
        return (child as ReactElement<ActionsColumnProps<TableData>>).props;
    },
};
