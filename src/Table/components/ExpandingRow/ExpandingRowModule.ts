import { ComponentType } from 'react';
import { Module } from '../../types';

export const DEFAULT_EXPANDER_WIDTH = '40px';

export interface ExpandingRowConfig {
    template: Function;
    wrapper: ComponentType;
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
    feature: 'ExpandingRow',
    initConfig: ({ child }): ExpandingRowConfig => {
        const { children, allowMultiple, noPadding, onExpand, customWrapper, ...attrs } = child.props;

        return {
            template: children,
            wrapper: customWrapper,
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
