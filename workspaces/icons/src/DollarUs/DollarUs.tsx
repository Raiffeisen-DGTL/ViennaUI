import React, { SVGAttributes } from 'react';

export interface DollarUsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const DollarUs: React.FC<DollarUsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M14 4h-1V2h-2v2h-1a4 4 0 00-4 4v1a4 4 0 004 4h4a2 2 0 012 2v1a2 2 0 01-2 2h-4a2 2 0 01-2-2H6a4 4 0 004 4h1v2h2v-2h1a4 4 0 004-4v-1a4 4 0 00-4-4h-4a2 2 0 01-2-2V8a2 2 0 012-2h4a2 2 0 012 2h2a4 4 0 00-4-4z' />
        </svg>
    );
};

DollarUs.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

DollarUs.displayName = 'DollarUs';
export default DollarUs;
