import React, { SVGAttributes } from 'react';

export interface NavigationProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Navigation: React.FC<NavigationProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M13 20V10h6a1 1 0 00.707-.293l2-2a1 1 0 000-1.414l-2-2A1 1 0 0019 4h-6V2h-2v6H5a1 1 0 00-.707.293l-2 2a1 1 0 000 1.414l2 2A1 1 0 005 14h6v6H7v2h10v-2h-4zm-2-8v-2H5.414l-1 1 1 1H11zm7.586-4H13V6h5.586l1 1-1 1z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Navigation.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Navigation.displayName = 'Navigation';
export default Navigation;
