import React from 'react';
import { SelectionRender } from './SelectionModule';

interface SelectionProps<T = unknown> {
    children: SelectionRender<T>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Selection: React.FC<SelectionProps> = (props) => {
    return <React.Fragment />;
};

Selection.displayName = 'Selection';
export default Selection;
