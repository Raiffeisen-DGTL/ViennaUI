import React, { SVGAttributes } from 'react';

export interface TabletProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tablet: React.FC<TabletProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M2 5.979C2 4.886 2.886 4 3.979 4h16.063C21.123 4 22 4.877 22 5.958v12.071A1.97 1.97 0 0120.029 20H3.971A1.97 1.97 0 012 18.029V5.979zM20 6H4v12h16V6zm-3 5h2v2h-2v-2z' />
        </svg>
    );
};

Tablet.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tablet.displayName = 'Tablet';
export default Tablet;
