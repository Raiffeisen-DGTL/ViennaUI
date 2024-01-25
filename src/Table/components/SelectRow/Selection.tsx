import React from 'react';
import { SelectionRender } from './SelectionModule';

interface SelectionProps<T = unknown> {
    children: SelectionRender<T>;
}

export const Selection: React.FC<SelectionProps> = () => {
    return <React.Fragment />;
};

Selection.displayName = 'Selection';
