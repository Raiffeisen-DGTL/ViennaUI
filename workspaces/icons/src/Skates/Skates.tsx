import React, { SVGAttributes } from 'react';

export interface SkatesProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Skates: React.FC<SkatesProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M21 18a2 2 0 01-2 2h-.844v-2.315c1.9-.346 2.844-1.328 2.844-3v-.75c0-1.95-.938-4.1-3.583-4.1a3.45 3.45 0 01-2.8-1.17A5.22 5.22 0 0113 5.292c0-.764.01-1.528.016-2.292a.994.994 0 00-.996-1H5a1 1 0 00-1 1v4.833a7.8 7.8 0 01-.507 2.019A7.333 7.333 0 003 11.833V17a1 1 0 001 1h1.031v2H2v2h17a4 4 0 004-4h-2zM5 11.843c.102-.468.235-.928.4-1.377A8.7 8.7 0 006 7.833V4h5.012c0 .43-.012.861-.012 1.292a7.186 7.186 0 002.215 4.8 5.187 5.187 0 003.827 1.621c.88 0 1.958.334 1.958 2.084v.9c0 .456 0 1.145-2.563 1.145a6.685 6.685 0 01-2.334-.566A10.717 10.717 0 009 13.833H8V16H5v-4.157zM10 17a1 1 0 01-1 1H6.969v2h9.25v-2.176a8.586 8.586 0 01-3.031-.78A7.178 7.178 0 0010 15.881V17z'
                clipRule='evenodd'
            />
        </svg>
    );
};

Skates.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

Skates.displayName = 'Skates';
export default Skates;
