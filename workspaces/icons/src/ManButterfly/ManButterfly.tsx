import React, { SVGAttributes } from 'react';

export interface ManButterflyProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ManButterfly: React.FC<ManButterflyProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M7 7a5 5 0 1110 0A5 5 0 017 7zm5-3a3 3 0 100 6 3 3 0 000-6z'
                clipRule='evenodd'
            />
            <path d='M12 14l-2-1v3l2-1 2 1v-3l-2 1zm-3.634-.195C5.21 15.322 3.5 18.7 3.5 22h2c0-2.674 1.39-5.267 3.732-6.393l-.866-1.802zm6.402 1.802C17.11 16.733 18.5 19.327 18.5 22h2c0-3.299-1.71-6.678-4.865-8.195l-.867 1.802z' />
        </svg>
    );
};

ManButterfly.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ManButterfly.displayName = 'ManButterfly';
export default ManButterfly;
