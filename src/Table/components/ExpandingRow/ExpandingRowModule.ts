import { ReactElement, isValidElement } from 'react';
import { Module, TableData } from '../../types';
import { ExpandingRowProps } from './ExpandingRow';
import { DEFAULT_EXPANDER_WIDTH } from '../../constants';

export interface ExpandingRowConfig<T> {
    template: ExpandingRowProps<T>['children'];
    wrapper?: ExpandingRowProps<T>['customWrapper'];
    settings: {
        width: string;
        allowMultiple: ExpandingRowProps<T>['allowMultiple'];
        noPadding?: ExpandingRowProps<T>['noPadding'];
        attrs?: Omit<ExpandingRowProps<T>, 'children' | 'allowMultiple' | 'noPadding' | 'onExpand' | 'customWrapper'>;
        expandedRow?: string | string[];
        onExpand?: ExpandingRowProps<T>['onExpand'];
    };
}

export interface ExpandingRowState {
    active?: string | string[];
}

export const ExpandingRowModule: Module<ExpandingRowConfig<TableData>, ExpandingRowState, TableData> = {
    name: 'expandingRow',
    feature: 'ExpandingRow',
    initConfig: ({ child }): ExpandingRowConfig<TableData> => {
        const { children, allowMultiple, noPadding, onExpand, customWrapper, ...attrs } = (
            child as ReactElement<ExpandingRowProps<TableData>>
        ).props;

        return {
            template: children,
            wrapper: customWrapper,
            settings: {
                width: DEFAULT_EXPANDER_WIDTH,
                allowMultiple: !!allowMultiple,
                noPadding,
                onExpand,
                attrs,
            },
        };
    },

    initState: ({ child, config }): ExpandingRowState => {
        return {
            active: isValidElement(child)
                ? (child as ReactElement<ExpandingRowProps<TableData>>).props.expandedRow
                : undefined,
        };
    },
};
