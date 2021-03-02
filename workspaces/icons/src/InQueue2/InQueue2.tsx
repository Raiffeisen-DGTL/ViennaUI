import React, { SVGAttributes } from 'react';

export interface InQueue2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const InQueue2: React.FC<InQueue2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2.293 4.707L4.586 7 2.293 9.293l1.414 1.414 3-3a1 1 0 000-1.414l-3-3-1.414 1.414zM3 14h18v-2H3v2zm9 6H3v-2h9v2zM9 8h12V6H9v2z' />
        </svg>
    );
};

InQueue2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

InQueue2.displayName = 'InQueue2';
export default InQueue2;
