import { Module } from '../../types';

export interface ExpandingRowConfig {
    template: Function;
    settings: {
        allowMultiple: boolean;
        attrs?: [];
        onExpand: (e, data) => void;
    };
}

export interface ExpandingRowState {
    active?: any | any[];
}

export const ExpandingRowModule: Module = {
    name: 'expandingRow',
    initConfig: ({ child }): ExpandingRowConfig => {
        const { children, allowMultiple, onExpand, ...attrs } = child.props;

        return {
            template: children,
            settings: {
                allowMultiple,
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
