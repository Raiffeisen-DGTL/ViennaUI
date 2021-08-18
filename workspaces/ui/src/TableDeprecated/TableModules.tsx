import React from 'react';
import { Module, TableConfig, TableState, TableFeature, TableFeatures } from './types';
import {
    BaseModule,
    ColumnsModule,
    FooterModule,
    EmptyModule,
    ExpandingRowModule,
    SelectRowModule,
    ColumnGroupModule,
    GroupByModule,
    SettingsModule,
    ActionsColumnModule,
    SortModule,
    FilterModule,
} from './components';

const component2Module = {
    Column: ColumnsModule,
    EmptyState: EmptyModule,
    Footer: FooterModule,
    ExpandingRow: ExpandingRowModule,
    SelectAll: SelectRowModule,
    ColumnGroup: ColumnGroupModule,
    GroupBy: GroupByModule,
    Settings: SettingsModule,
    ActionsColumn: ActionsColumnModule,
};

const initModule = (module: Module, child, settings, config, state, features: TableFeatures) => {
    if (module.initConfig) {
        config[module.name] = module.initConfig({ child, settings, config: config[module.name] });
    }

    if (module.initState) {
        state[module.name] = module.initState({ child, settings, config: state[module.name] });
    }

    if (module.feature) {
        features.add(module.feature);
    }
};

const getModule = (child: any) => {
    if (!child?.type?.displayName || !(child.type.displayName in component2Module)) {
        // eslint-disable-next-line no-console
        console.warn(`Unrecognized table component: ${child?.type}`);
        return undefined;
    }

    return component2Module[child.type.displayName];
};

export function initModules(params): { config: TableConfig; state: TableState; features: TableFeatures } {
    const { children, settings } = params;

    const config: any = {};
    const state: any = {};
    const features: TableFeatures = new Set<TableFeature>();

    const outlined = React.Children.toArray(children).some((child: any) => child?.type?.displayName === 'ColumnGroup');
    initModule(BaseModule, null, { ...settings, outlined }, config, state, features);

    if (settings.onSelect) {
        initModule(SelectRowModule, null, settings, config, state, features);
    }

    if (settings.sort) {
        initModule(SortModule, null, settings, config, state, features);
    }

    if (settings.filter) {
        initModule(FilterModule, null, settings, config, state, features);
    }

    React.Children.forEach(React.Children.toArray(children), (child: any) => {
        const module = getModule(child);
        if (!child.type || !module) {
            return;
        }

        if (child.type.displayName === 'ColumnGroup' && React.Children.count(child.props.children) !== 0) {
            const { id: groupId } = child.props;
            const columns: any = [];

            React.Children.forEach(React.Children.toArray(child.props.children), (subChild: any) => {
                const subChildModule = getModule(subChild);
                if (!subChildModule || subChild.type.displayName !== 'Column') {
                    return;
                }

                columns.push(subChild.props.id);

                initModule(subChildModule, subChild, { ...subChild.props, groupId }, config, state, features);
            });

            initModule(module, child, { columns }, config, state, features);

            return;
        }

        initModule(module, child, settings, config, state, features);
    });
    return { config, state, features };
}
