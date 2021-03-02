import React, { SVGAttributes } from 'react';

export interface GrandfatherProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Grandfather: React.FC<GrandfatherProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12 18.958a5.989 5.989 0 005.504-3.67 4.787 4.787 0 002.408-1.2 7.989 7.989 0 01-15.817.029A4.76 4.76 0 006.5 15.293a5.987 5.987 0 005.5 3.665zM15 17H9v-1l1-1h4l1 1v1zm6-9v2h-1.051c.03.165.046.332.051.5a3.492 3.492 0 01-6.951.5h-2.1A3.492 3.492 0 014 10.5c.005-.168.022-.335.051-.5H3V8h1.269a7.981 7.981 0 0115.462 0H21zM7.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5.851-3a3.472 3.472 0 013.878-1.922 5.977 5.977 0 00-10.454 0A3.472 3.472 0 0110.651 9h2.7zm3.149 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
        </svg>
    );
};

Grandfather.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Grandfather.displayName = 'Grandfather';
export default Grandfather;
