import React, { SVGAttributes } from 'react';

export interface HouseProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const House: React.FC<HouseProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 14H9v3h2v-3z' />
            <path
                fillRule='evenodd'
                d='M11.321 2.266a1 1 0 011.358 0l8 7.4A1 1 0 0121 10.4V12a1 1 0 01-1 1h-1v7a1 1 0 01-1 1H6a1 1 0 01-1-1v-7H4a1 1 0 01-1-1v-1.6a1 1 0 01.32-.734l8.001-7.4zM5 11h2v8h6v-6h2v6h2v-8h2v-.163l-7-6.475-7 6.475V11z'
                clipRule='evenodd'
            />
        </svg>
    );
};

House.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

House.displayName = 'House';
export default House;
