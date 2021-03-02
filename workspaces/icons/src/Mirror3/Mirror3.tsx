import React, { SVGAttributes } from 'react';

export interface Mirror3Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Mirror3: React.FC<Mirror3Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M13.707 8.707l-5 5-1.414-1.414 5-5 1.414 1.414zm3 2l-5 5-1.414-1.414 5-5 1.414 1.414z' />
            <path
                fillRule='evenodd'
                d='M3 3.5a1.5 1.5 0 001 1.415v14.17A1.5 1.5 0 105.915 21h12.17A1.5 1.5 0 1020 19.085V4.915A1.5 1.5 0 1018.085 3H5.915A1.5 1.5 0 003 3.5zM6 19V5h12v14H6z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Mirror3.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Mirror3.displayName = 'Mirror3';
export default Mirror3;
