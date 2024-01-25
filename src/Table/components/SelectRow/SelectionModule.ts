import { Module } from '../../types';

export type SelectionRender<T> = (params: {
    data: T;
    isSelected: boolean;
    onClick: Function;
    onChange: Function;
}) => JSX.Element;

export interface SelectionConfig<T = unknown> {
    template: SelectionRender<T>;
}

export const SelectionModule: Module<SelectionConfig> = {
    name: 'selection',
    feature: 'SelectRow',
    initConfig: ({ child }) => {
        const { children } = child.props;

        return {
            template: children,
        };
    },
};
