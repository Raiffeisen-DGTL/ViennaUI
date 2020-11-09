import { Module } from '../../types';
import { ActionsColumnProps } from './ActionsColumn';

export type ActionsColumnConfig = ActionsColumnProps;

export const ActionsColumnModule: Module = {
    name: 'actionsColumn',
    initConfig: ({ child }): ActionsColumnConfig => {
        return child.props;
    },
};
