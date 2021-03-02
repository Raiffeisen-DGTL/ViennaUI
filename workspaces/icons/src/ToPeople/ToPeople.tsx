import React, { SVGAttributes } from 'react';

export interface ToPeopleProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const ToPeople: React.FC<ToPeopleProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M16.5 2a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM14 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z'
                clipRule='evenodd'
            />
            <path d='M16.5 12c-1.59 0-2.97.467-4.078 1.25l1.155 1.633c.763-.54 1.738-.883 2.923-.883 3.14 0 5 2.466 5 5h2c0-3.466-2.59-7-7-7z' />
            <path
                fillRule='evenodd'
                d='M3 8a4 4 0 118 0 4 4 0 01-8 0zm4-2a2 2 0 100 4 2 2 0 000-4z'
                clipRule='evenodd'
            />
            <path d='M7 13C2.83 13 .5 16.62.5 20h2c0-2.62 1.75-5 4.5-5v-2zm3.586 7H5v-2h5.586l-2.293-2.293 1.414-1.414 4 4a1 1 0 010 1.414l-4 4-1.414-1.414L10.586 20z' />
        </svg>
    );
};

ToPeople.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

ToPeople.displayName = 'ToPeople';
export default ToPeople;
