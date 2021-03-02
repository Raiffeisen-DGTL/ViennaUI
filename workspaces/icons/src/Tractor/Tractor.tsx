import React, { SVGAttributes } from 'react';

export interface TractorProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tractor: React.FC<TractorProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 4a1 1 0 00-.928.629L9.322 9H7V6h1V4H4v2h1v3H4a1 1 0 00-1 1v5.05A3.5 3.5 0 108.663 19H13a5 5 0 108-6V5a1 1 0 00-1-1h-8zM5 14.035V11h5a1 1 0 00.928-.629L12.678 6H19v5.416A5 5 0 0012.1 17H8.965A3.5 3.5 0 005 14.035zM14 16a3 3 0 116 0 3 3 0 01-6 0zM4 17.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm13-.5a1 1 0 100-2 1 1 0 000 2z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Tractor.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tractor.displayName = 'Tractor';
export default Tractor;
