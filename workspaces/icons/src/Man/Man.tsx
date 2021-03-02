import React, { SVGAttributes } from 'react';

export interface ManProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Man: React.FC<ManProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a5 5 0 100 10 5 5 0 000-10zM9 7a3 3 0 116 0 3 3 0 01-6 0z'
                clipRule='evenodd'
            />
            <path d='M12 13c-5.41 0-8.5 4.598-8.5 9h2c0-3.598 2.473-7 6.5-7s6.5 3.402 6.5 7h2c0-4.402-3.09-9-8.5-9z' />
        </svg>
    );
};

Man.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Man.displayName = 'Man';
export default Man;
