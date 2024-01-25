import { Module } from '../../types';
import { ActionsColumnProps } from './ActionsColumn';

export type ActionsColumnConfig = ActionsColumnProps;

export const ActionsColumnModule: Module = {
    name: 'actionsColumn',
    feature: 'ActionsColumn',
    initConfig: ({ child }): ActionsColumnConfig => {
        return child.props;
    },
};
