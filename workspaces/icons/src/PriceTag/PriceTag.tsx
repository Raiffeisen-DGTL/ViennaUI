import React, { SVGAttributes } from 'react';

export interface PriceTagProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PriceTag: React.FC<PriceTagProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19.475 3.08l1.685-1.685 1.414 1.414-4.95 4.95-1.414-1.414 1.861-1.861L17.59 4h-5.18l-9 9L11 20.59l9-9V7.52l2-1.93v5.82a2.47 2.47 0 01-.71 1.76l-8.77 8.81a2.11 2.11 0 01-3 0l-7.46-7.46a2.11 2.11 0 010-3l8.81-8.81A2.47 2.47 0 0112.59 2h5.82l1.065 1.08zM10.3 8.709l1.414-1.414 5 4.999-1.415 1.414-5-4.999zm-2.5 2.506L9.214 9.8l5 5-1.415 1.414-5-5z' />
        </svg>
    );
};

PriceTag.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PriceTag.displayName = 'PriceTag';
export default PriceTag;
