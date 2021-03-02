import React, { SVGAttributes } from 'react';

export interface SuitcaseProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Suitcase: React.FC<SuitcaseProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M10 2a2 2 0 00-2 2v2H3a1 1 0 00-1 1v13a1 1 0 001 1h18a1 1 0 001-1V7a1 1 0 00-1-1h-5V4a2 2 0 00-2-2h-4zm4 4V4h-4v2h4zM4 19V8h2v11H4zm4 0h8V8H8v11zm12 0h-2V8h2v11z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Suitcase.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Suitcase.displayName = 'Suitcase';
export default Suitcase;
