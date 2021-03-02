import React, { SVGAttributes } from 'react';

export interface Moto2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Moto2: React.FC<Moto2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M18 5a2 2 0 11-4 0 2 2 0 014 0z' />
            <path
                fillRule='evenodd'
                d='M5 13a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0zm16-4a4 4 0 100 8 4 4 0 000-8zm-2 4a2 2 0 114 0 2 2 0 01-4 0z'
                clipRule='evenodd'
            />
            <path d='M12.707 6.793a1 1 0 00-1.414 0l-3.5 3.5a1 1 0 000 1.414L11 14.914V20h2v-5.5a1 1 0 00-.293-.707L9.914 11 12 8.914l3.793 3.793 1.414-1.414-4.5-4.5z' />
        </svg>
    );
};

Moto2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Moto2.displayName = 'Moto2';
export default Moto2;
