import React, { SVGAttributes } from 'react';

export interface DocRecieveProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DocRecieve: React.FC<DocRecieveProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 3a1 1 0 00-1-1H3a1 1 0 00-1 1v18a1 1 0 001 1h7v-2H4V4h12v6h2V3z' />
            <path d='M10.293 16.293l4.5-4.5 1.414 1.414L13.414 16H22v2h-8.586l2.793 2.793-1.414 1.414-4.5-4.5a1 1 0 010-1.414z' />
        </svg>
    );
};

DocRecieve.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DocRecieve.displayName = 'DocRecieve';
export default DocRecieve;
