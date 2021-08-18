import React, { SVGAttributes } from 'react';

export interface PriceTagRubleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PriceTagRuble: React.FC<PriceTagRubleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M20 7.555v4.031l-9 9L3.414 13l9-9h5.172l.5.5-1.793 1.793 1.414 1.414 4.95-4.95-1.414-1.414L19.5 3.086 18.414 2h-5.823c-.644 0-1.26.256-1.716.711l-8.811 8.811a2.091 2.091 0 000 2.956l7.458 7.458a2.09 2.09 0 002.956 0l8.811-8.811A2.429 2.429 0 0022 11.408V5.586l-.016-.016L20 7.555z' />
        </svg>
    );
};

PriceTagRuble.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PriceTagRuble.displayName = 'PriceTagRuble';
export default PriceTagRuble;
