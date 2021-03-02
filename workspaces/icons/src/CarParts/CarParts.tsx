import React, { SVGAttributes } from 'react';

export interface CarPartsProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const CarParts: React.FC<CarPartsProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-8a8.001 8.001 0 00-7.938 7H7.61a10.29 10.29 0 011.085-.832C9.495 9.635 10.7 9 12 9c1.3 0 2.505.635 3.305 1.168A10.569 10.569 0 0116.39 11h3.548A8.001 8.001 0 0012 4zm-1 15.938A8.004 8.004 0 014.062 13h3.47l2.2 2.64a1 1 0 00.768.36h.5v3.938zm2 0A8.004 8.004 0 0019.938 13h-3.47l-2.2 2.64a1 1 0 01-.768.36H13v3.938zm1.599-7.819a8.225 8.225 0 00-.404-.287C13.495 11.365 12.7 11 12 11c-.7 0-1.495.365-2.195.832a8.132 8.132 0 00-.404.287L10.968 14h2.064l1.567-1.88z'
                clipRule='evenodd'
            />
        </svg>
    );
};

CarParts.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

CarParts.displayName = 'CarParts';
export default CarParts;
