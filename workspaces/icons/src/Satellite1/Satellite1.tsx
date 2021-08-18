import React, { SVGAttributes } from 'react';

export interface Satellite1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Satellite1: React.FC<Satellite1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M17.061 2.609A8 8 0 0014 2v2a6 6 0 016 6h2a7.999 7.999 0 00-4.939-7.391z' />
            <path
                fillRule='evenodd'
                d='M11 11.586l-4.95-4.95a.972.972 0 00-1.402.012c-.799.865-1.498 1.785-1.963 2.908a9 9 0 0011.76 11.759c1.123-.465 2.042-1.164 2.907-1.963a.972.972 0 00.012-1.402L12.414 13l2.293-2.293-1.414-1.414L11 11.586zM4.533 10.32a7 7 0 01.86-1.513l9.799 9.798a7.005 7.005 0 01-6.87.861 7 7 0 01-3.79-9.146z'
                clipRule='evenodd'
            />
            <path d='M14 6a4 4 0 014 4h-2a2 2 0 00-2-2V6z' />
        </svg>
    );
};

Satellite1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Satellite1.displayName = 'Satellite1';
export default Satellite1;
