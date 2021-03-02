import React, { SVGAttributes } from 'react';

export interface GearWheelRubleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const GearWheelRuble: React.FC<GearWheelRubleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M12.021 13h-1.344v1.281h4.344V16h-4.344v2H9.021v-2h-2v-1.719h2V13h-2v-1.688h2V7h4a3 3 0 010 6h-1zm-1.3-4.3v2.6h2.3a1.3 1.3 0 100-2.6h-2.3zM23 13.021h-1.334a9.583 9.583 0 01-.792 2.924l1.163.671-1.021 1.768-1.17-.676a9.773 9.773 0 01-2.139 2.134l.677 1.174-1.768 1.021-.676-1.171a9.633 9.633 0 01-2.919.782V23h-2.042v-1.354a9.6 9.6 0 01-2.909-.792l-.686 1.187-1.768-1.021.69-1.2a9.783 9.783 0 01-2.126-2.138l-1.2.692-1.021-1.768 1.2-.69a9.605 9.605 0 01-.783-2.9H1v-2.042h1.38a9.605 9.605 0 01.783-2.9l-1.2-.69 1.02-1.768 1.2.692a9.783 9.783 0 012.128-2.124l-.69-1.2 1.763-1.021.686 1.187a9.6 9.6 0 012.909-.792V1h2.042v1.352a9.633 9.633 0 012.924.782l.676-1.171 1.768 1.021-.677 1.174a9.773 9.773 0 012.139 2.134l1.17-.676 1.016 1.768-1.163.671c.417.927.685 1.914.792 2.924H23v2.042zM12.021 20a8.009 8.009 0 008-8 8 8 0 10-8 8z' />
        </svg>
    );
};

GearWheelRuble.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

GearWheelRuble.displayName = 'GearWheelRuble';
export default GearWheelRuble;
