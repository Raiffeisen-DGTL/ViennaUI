import React, { SVGAttributes } from 'react';

export interface Picture1Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Picture1: React.FC<Picture1Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M8 12a2 2 0 100-4 2 2 0 000 4z' />
            <path
                fillRule='evenodd'
                d='M2 5a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5zm2 1v12h2.586l5.707-5.707a1 1 0 011.414 0L15 13.586l5-5V6H4zm16 12H9.414L13 14.414l1.293 1.293a1 1 0 001.414 0L20 11.414V18z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Picture1.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Picture1.displayName = 'Picture1';
export default Picture1;
