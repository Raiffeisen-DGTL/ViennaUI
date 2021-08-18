import React, { SVGAttributes } from 'react';

export interface Drag1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Drag1: React.FC<Drag1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.707 2.293a1 1 0 00-1.414 0l-3.5 3.5 1.414 1.414L11 5.414V11H5.414l1.793-1.793-1.414-1.414-3.5 3.5a1 1 0 000 1.414l3.5 3.5 1.414-1.414L5.414 13H11v5.586l-1.793-1.793-1.414 1.414 3.5 3.5a1 1 0 001.414 0l3.5-3.5-1.414-1.414L13 18.586V13h5.586l-1.793 1.793 1.414 1.414 3.5-3.5a1 1 0 000-1.414l-3.5-3.5-1.414 1.414L18.586 11H13V5.414l1.793 1.793 1.414-1.414-3.5-3.5z' />
        </svg>
    );
};

Drag1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Drag1.displayName = 'Drag1';
export default Drag1;
