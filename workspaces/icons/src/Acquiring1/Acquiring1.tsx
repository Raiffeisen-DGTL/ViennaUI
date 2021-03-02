import React, { SVGAttributes } from 'react';

export interface Acquiring1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Acquiring1: React.FC<Acquiring1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13 16h-2v2h2v-2zm-2-4h2v2h-2v-2zm-2 6v-2H7v2h2zm0-6v2H7v-2h2zm8 6v-2h-2v2h2zm0-6v2h-2v-2h2z' />
            <path
                fillRule='evenodd'
                d='M8 3a1 1 0 011-1h6a1 1 0 011 1v1h4a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h4V3zm8 5V6h3v14H5V6h3v2H7v2h10V8h-1zm-2 0V4h-4v4h4z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Acquiring1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Acquiring1.displayName = 'Acquiring1';
export default Acquiring1;
