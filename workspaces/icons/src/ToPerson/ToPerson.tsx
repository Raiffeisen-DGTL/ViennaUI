import React, { SVGAttributes } from 'react';

export interface ToPersonProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ToPerson: React.FC<ToPersonProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M12 2a5 5 0 110 10 5 5 0 010-10zm3 5a3 3 0 10-6 0 3 3 0 006 0z'
                clipRule='evenodd'
            />
            <path d='M11.5 13c5.41 0 8.5 4.598 8.5 9h-2c0-3.598-2.473-7-6.5-7-1.06 0-1.994.23-2.798.621l-.784-1.842A8.33 8.33 0 0111.5 13zM0 20h5.586l-2.293 2.293 1.414 1.414 4-4a1 1 0 000-1.414l-4-4-1.414 1.414L5.586 18H0v2z' />
        </svg>
    );
};

ToPerson.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ToPerson.displayName = 'ToPerson';
export default ToPerson;
