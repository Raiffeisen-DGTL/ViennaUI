import React, { SVGAttributes } from 'react';

export interface PersonServiceProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const PersonService: React.FC<PersonServiceProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path
                fillRule='evenodd'
                d='M6 7a5 5 0 1110 0A5 5 0 016 7zm5-3a3 3 0 100 6 3 3 0 000-6z'
                clipRule='evenodd'
            />
            <path d='M3 22c0-4.402 3.09-9 8.5-9 1.12 0 2.157.201 3.094.57l-.73 1.86A6.426 6.426 0 0011.5 15C7.473 15 5 18.402 5 22H3zm15-7h2v2.277l2.006-1.145.993 1.736L21.017 19 23 20.132l-.993 1.736L20 20.723V23h-2.002v-2.277l-2.006 1.145L15 20.132 16.983 19 15 17.868l.993-1.736L18 17.277V15z' />
        </svg>
    );
};

PersonService.defaultProps = {
    size: 'm',
    color: 'currentColor',
};

PersonService.displayName = 'PersonService';
export default PersonService;
