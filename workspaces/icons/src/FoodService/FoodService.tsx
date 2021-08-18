import React, { SVGAttributes } from 'react';

export interface FoodServiceProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const FoodService: React.FC<FoodServiceProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M15 2H9v2h2v2.05A10 10 0 002 16a1 1 0 001 1h18a1 1 0 001-1 10 10 0 00-9-9.95V4h2V2zm-3 6a8 8 0 00-7.937 7h15.874A8 8 0 0012 8z'
                clipRule='evenodd'
            />
            <path d='M22 21H2v-2h20v2z' />
        </svg>
    );
};

FoodService.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

FoodService.displayName = 'FoodService';
export default FoodService;
