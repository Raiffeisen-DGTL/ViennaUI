/* eslint-disable @typescript-eslint/ban-types */
import { ReactElement } from 'react';
import { Module, TableData } from '../../types';

export type SelectionRender<T> = (params: {
    data: T;
    isSelected: boolean;
    onClick: Function;
    onChange: Function;
}) => JSX.Element;

export interface SelectionConfig<T = unknown> {
    template: SelectionRender<T>;
}

interface ChildPropsType {
    children: SelectionConfig['template'];
}

export const SelectionModule: Module<SelectionConfig, undefined, TableData> = {
    name: 'selection',
    feature: 'SelectRow',
    initConfig: ({ child }) => {
        const { children } = (child as ReactElement<ChildPropsType>).props;

        return {
            template: children,
        };
    },
};
