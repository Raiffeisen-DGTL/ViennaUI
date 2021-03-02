import React, { SVGAttributes } from 'react';

export interface TowerProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Tower: React.FC<TowerProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.636 6l4.15 14H21l1 1v1H2v-1l1-1h4.183l3.319-14H8v2H6V4h4.976l.474-2h1l.593 2H18v4h-2V6h-2.364zM9.235 20h6.464l-1.149-3.82-5 2.48L9.235 20zm.845-3.49l3.16-1.54-2.44-1.46-.72 3zm1.13-4.78l2.46 1.48-1.56-5.3-.9 3.82z' />
        </svg>
    );
};

Tower.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Tower.displayName = 'Tower';
export default Tower;
