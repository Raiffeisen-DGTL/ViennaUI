import React, { SVGAttributes } from 'react';

export interface FishingProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Fishing: React.FC<FishingProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M19 10v.016c-.019 2.226-3.53 3.39-7 3.39-3.359 0-6.749-1.094-6.978-3.183A1.462 1.462 0 015 10a7 7 0 016-6.92V1h2v2.08A7 7 0 0119 10zM7 10c.059.407 1.886 1.406 5 1.406s4.937-.997 5-1.406a5 5 0 00-10 0zm5 9c1.559 0 3.173-2.411 4.131-4.97a7.11 7.11 0 002.46-1.181c-.837 3.327-2.91 7.193-5.591 7.993v2.116h-2v-2.116c-2.681-.8-4.754-4.666-5.591-7.993a7.11 7.11 0 002.46 1.181C8.827 16.589 10.441 19 12 19z' />
        </svg>
    );
};

Fishing.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Fishing.displayName = 'Fishing';
export default Fishing;
