import { Module, TableFeature } from '../../types';

export const DEFAULT_EXPANDER_WIDTH = '40px';

export interface ExpandingRowConfig {
    template: Function;
    settings: {
        width: string;
        allowMultiple: boolean;
        noPadding?: boolean;
        attrs?: [];
        onExpand: (e, data) => void;
    };
}

export interface ExpandingRowState {
    active?: any | any[];
}

export const ExpandingRowModule: Module = {
    name: 'expandingRow',
    feature: TableFeature.ExpandingRow,
    initConfig: ({ child }): ExpandingRowConfig => {
        const { children, allowMultiple, noPadding, onExpand, ...attrs } = child.props;

        return {
            template: children,
            settings: {
                width: DEFAULT_EXPANDER_WIDTH,
                allowMultiple,
                noPadding,
                onExpand,
                attrs,
            },
        };
    },

    initState: ({ child }): ExpandingRowState => {
        return {
            active: child.props.expandedRow,
        };
    },
};
