import React, { SVGAttributes } from 'react';

export interface Theater2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Theater2: React.FC<Theater2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M21 20l1 1v1H2v-1l1-1h18zM5 13h2v6H5v-6zm4 0h2v6H9v-6zm4 0h2v6h-2v-6zm4 0h2v6h-2v-6zM3 10h18v2H3v-2zm9-4.764L4.472 9H3V5h2v1.5l6-3V2h2v1.5l6 3V5h2v4h-1.472L12 5.236zM11 7h2v2h-2V7z' />
        </svg>
    );
};

Theater2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Theater2.displayName = 'Theater2';
export default Theater2;
