import React, { SVGAttributes } from 'react';

export interface Save2Props extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Save2: React.FC<Save2Props> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h5v2H5v13h14V6h-4V4h5a1 1 0 011 1v15a1 1 0 01-1 1H4a1 1 0 01-1-1V5z'
                clipRule='evenodd'
            />
            <path fillRule='evenodd' d='M11 14V2h2v12h-2z' clipRule='evenodd' />
            <path
                fillRule='evenodd'
                d='M11.293 15.707l-4-4 1.414-1.414L12 13.586l3.293-3.293 1.414 1.414-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Save2.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Save2.displayName = 'Save2';
export default Save2;
