import { Module, TableFeature } from '../../types';

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
    feature: TableFeature.SelectRow,

    initConfig: ({ child }) => {
        const { children } = child.props;

        return {
            template: children,
        };
    },
};
